import { pgTable, uuid, text, timestamp, pgEnum, jsonb } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from 'drizzle-orm-helpers/auth'; // Assuming this provides auth.users

export const accountTypeEnum = pgEnum('account_type', ['employee','contractor','intellistaff','intellihire','intelliwork','tenant']);
export const accountStatusEnum = pgEnum('account_status', ['pending_email_verification','pending_approval','active','rejected','suspended']);
export const appRoleEnum = pgEnum('app_role', ['global_admin','approver','tenant_admin']); // Added tenant_admin

export const userRoles = pgTable('user_roles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  role: appRoleEnum('role').notNull(),
});

export const userRolesRelations = relations(userRoles, ({ one }) => ({
  user: one(users, {
    fields: [userRoles.userId],
    references: [users.id],
  }),
}));

export const accountRegistrations = pgTable('account_registrations', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().unique(),
  accountType: accountTypeEnum('account_type').notNull(),
  status: accountStatusEnum('status').notNull().default('pending_email_verification'),
  email: text('email'),
  phone: text('phone'),
  displayName: text('display_name'),
  organizationName: text('organization_name'),
  details: jsonb('details').notNull().default({}),
  reviewedBy: uuid('reviewed_by'),
  reviewedAt: timestamp('reviewed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  tenantId: uuid('tenant_id').references(() => tenants.id, { onDelete: 'cascade' }), // Added tenantId
});

export const accountRegistrationsRelations = relations(accountRegistrations, ({ one }) => ({
  user: one(users, {
    fields: [accountRegistrations.userId],
    references: [users.id],
  }),
  tenant: one(tenants, {
    fields: [accountRegistrations.tenantId],
    references: [tenants.id],
  }),
}));

export const tenants = pgTable('tenants', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const tenantsRelations = relations(tenants, ({ many }) => ({
  accountRegistrations: many(accountRegistrations),
  profiles: many(profiles),
}));

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull().unique(),
  tenantId: uuid('tenant_id').references(() => tenants.id, { onDelete: 'cascade' }).notNull(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  avatarUrl: text('avatar_url'),
  locale: text('locale'),
  timezone: text('timezone'),
  metadata: jsonb('metadata').notNull().default({}),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
  tenant: one(tenants, {
    fields: [profiles.tenantId],
    references: [tenants.id],
  }),
}));
