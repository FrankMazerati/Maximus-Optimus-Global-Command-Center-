
-- Consolidate permissive read/admin policies after initial schema creation.
DROP POLICY IF EXISTS "Authenticated users read active Help Buddy expressions" ON public.help_buddy_expression_catalog;
DROP POLICY IF EXISTS "Global admins manage Help Buddy expressions" ON public.help_buddy_expression_catalog;
CREATE POLICY "Help Buddy expressions read active or admin" ON public.help_buddy_expression_catalog
 FOR SELECT TO authenticated USING(status='active' OR private.is_global_admin());
CREATE POLICY "Help Buddy expressions insert admin" ON public.help_buddy_expression_catalog FOR INSERT TO authenticated WITH CHECK(private.is_global_admin());
CREATE POLICY "Help Buddy expressions update admin" ON public.help_buddy_expression_catalog FOR UPDATE TO authenticated USING(private.is_global_admin()) WITH CHECK(private.is_global_admin());
CREATE POLICY "Help Buddy expressions delete admin" ON public.help_buddy_expression_catalog FOR DELETE TO authenticated USING(private.is_global_admin());

DROP POLICY IF EXISTS "Authenticated users read published Help Buddy behavior rules" ON public.help_buddy_behavior_rules;
DROP POLICY IF EXISTS "Global admins manage Help Buddy behavior rules" ON public.help_buddy_behavior_rules;
CREATE POLICY "Help Buddy behavior rules read published or admin" ON public.help_buddy_behavior_rules
 FOR SELECT TO authenticated USING((enabled=true AND status='published') OR private.is_global_admin());
CREATE POLICY "Help Buddy behavior rules insert admin" ON public.help_buddy_behavior_rules FOR INSERT TO authenticated WITH CHECK(private.is_global_admin());
CREATE POLICY "Help Buddy behavior rules update admin" ON public.help_buddy_behavior_rules FOR UPDATE TO authenticated USING(private.is_global_admin()) WITH CHECK(private.is_global_admin());
CREATE POLICY "Help Buddy behavior rules delete admin" ON public.help_buddy_behavior_rules FOR DELETE TO authenticated USING(private.is_global_admin());

DROP POLICY IF EXISTS "Authenticated users read active Help Buddy personality blends" ON public.help_buddy_personality_blends;
DROP POLICY IF EXISTS "Global admins manage Help Buddy personality blends" ON public.help_buddy_personality_blends;
CREATE POLICY "Help Buddy blends read active or admin" ON public.help_buddy_personality_blends
 FOR SELECT TO authenticated USING(status='active' OR private.is_global_admin());
CREATE POLICY "Help Buddy blends insert admin" ON public.help_buddy_personality_blends FOR INSERT TO authenticated WITH CHECK(private.is_global_admin());
CREATE POLICY "Help Buddy blends update admin" ON public.help_buddy_personality_blends FOR UPDATE TO authenticated USING(private.is_global_admin()) WITH CHECK(private.is_global_admin());
CREATE POLICY "Help Buddy blends delete admin" ON public.help_buddy_personality_blends FOR DELETE TO authenticated USING(private.is_global_admin());

DROP POLICY IF EXISTS "authenticated users read active assistant personalities" ON public.assistant_personality_presets;
DROP POLICY IF EXISTS "Global admins manage assistant personality presets" ON public.assistant_personality_presets;
CREATE POLICY "Assistant personalities read active or admin" ON public.assistant_personality_presets
 FOR SELECT TO authenticated USING(status='active' OR private.is_global_admin());
CREATE POLICY "Assistant personalities insert admin" ON public.assistant_personality_presets FOR INSERT TO authenticated WITH CHECK(private.is_global_admin());
CREATE POLICY "Assistant personalities update admin" ON public.assistant_personality_presets FOR UPDATE TO authenticated USING(private.is_global_admin()) WITH CHECK(private.is_global_admin());
CREATE POLICY "Assistant personalities delete admin" ON public.assistant_personality_presets FOR DELETE TO authenticated USING(private.is_global_admin());
