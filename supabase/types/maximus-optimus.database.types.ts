export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      acceptance_test_runs: {
        Row: {
          checks: Json
          completed_at: string | null
          id: string
          organization_id: string | null
          requested_by: string | null
          started_at: string
          status: string
          suite_key: string
          summary: Json
          tenant_id: string | null
        }
        Insert: {
          checks?: Json
          completed_at?: string | null
          id?: string
          organization_id?: string | null
          requested_by?: string | null
          started_at?: string
          status?: string
          suite_key: string
          summary?: Json
          tenant_id?: string | null
        }
        Update: {
          checks?: Json
          completed_at?: string | null
          id?: string
          organization_id?: string | null
          requested_by?: string | null
          started_at?: string
          status?: string
          suite_key?: string
          summary?: Json
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "acceptance_test_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "acceptance_test_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "acceptance_test_runs_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      access_requests: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string
          expires_at: string | null
          id: string
          organization_id: string
          reason: string
          requested_permission_id: string | null
          requested_resource: string | null
          requested_role_id: string | null
          requester_profile_id: string
          starts_at: string | null
          status: string
          target_profile_id: string | null
          temporary_access: boolean
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          organization_id: string
          reason: string
          requested_permission_id?: string | null
          requested_resource?: string | null
          requested_role_id?: string | null
          requester_profile_id: string
          starts_at?: string | null
          status?: string
          target_profile_id?: string | null
          temporary_access?: boolean
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          organization_id?: string
          reason?: string
          requested_permission_id?: string | null
          requested_resource?: string | null
          requested_role_id?: string | null
          requester_profile_id?: string
          starts_at?: string | null
          status?: string
          target_profile_id?: string | null
          temporary_access?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "access_requests_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_requests_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "access_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "access_requests_requested_permission_id_fkey"
            columns: ["requested_permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_requests_requested_role_id_fkey"
            columns: ["requested_role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_requests_requester_profile_id_fkey"
            columns: ["requester_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_requests_requester_profile_id_fkey"
            columns: ["requester_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "access_requests_target_profile_id_fkey"
            columns: ["target_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_requests_target_profile_id_fkey"
            columns: ["target_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      ai_assistant_preferences: {
        Row: {
          accent_color: string
          assistant_key: string
          avatar_key: string | null
          background_key: string | null
          behavior_preferences: Json
          created_at: string
          expression_preferences: Json
          id: string
          is_customized: boolean
          language_code: string
          outfit_key: string | null
          text_scale: string
          theme_mode: string
          updated_at: string
          user_id: string
          voice_key: string | null
        }
        Insert: {
          accent_color?: string
          assistant_key: string
          avatar_key?: string | null
          background_key?: string | null
          behavior_preferences?: Json
          created_at?: string
          expression_preferences?: Json
          id?: string
          is_customized?: boolean
          language_code?: string
          outfit_key?: string | null
          text_scale?: string
          theme_mode?: string
          updated_at?: string
          user_id: string
          voice_key?: string | null
        }
        Update: {
          accent_color?: string
          assistant_key?: string
          avatar_key?: string | null
          background_key?: string | null
          behavior_preferences?: Json
          created_at?: string
          expression_preferences?: Json
          id?: string
          is_customized?: boolean
          language_code?: string
          outfit_key?: string | null
          text_scale?: string
          theme_mode?: string
          updated_at?: string
          user_id?: string
          voice_key?: string | null
        }
        Relationships: []
      }
      assistant_avatar_feature_options: {
        Row: {
          availability_tier: string
          created_at: string
          description: string
          feature_group: string
          id: string
          label: string
          option_key: string
          sort_order: number
          status: string
          tags: string[]
          updated_at: string
          visual_spec: Json
        }
        Insert: {
          availability_tier?: string
          created_at?: string
          description?: string
          feature_group: string
          id?: string
          label: string
          option_key: string
          sort_order?: number
          status?: string
          tags?: string[]
          updated_at?: string
          visual_spec?: Json
        }
        Update: {
          availability_tier?: string
          created_at?: string
          description?: string
          feature_group?: string
          id?: string
          label?: string
          option_key?: string
          sort_order?: number
          status?: string
          tags?: string[]
          updated_at?: string
          visual_spec?: Json
        }
        Relationships: []
      }
      assistant_background_presets: {
        Row: {
          background_key: string
          category: string
          created_at: string
          description: string
          id: string
          motion_level: string
          name: string
          sort_order: number
          status: string
          visual_spec: Json
        }
        Insert: {
          background_key: string
          category: string
          created_at?: string
          description: string
          id?: string
          motion_level?: string
          name: string
          sort_order?: number
          status?: string
          visual_spec?: Json
        }
        Update: {
          background_key?: string
          category?: string
          created_at?: string
          description?: string
          id?: string
          motion_level?: string
          name?: string
          sort_order?: number
          status?: string
          visual_spec?: Json
        }
        Relationships: []
      }
      assistant_character_profiles: {
        Row: {
          allows_personal_name: boolean
          availability_tier: string
          character_id: string
          config_code: string
          created_at: string
          default_background_key: string
          default_outfit_key: string
          default_personality_key: string
          display_name: string
          metadata: Json
          presentation_style: string
          representation_tags: string[]
          sort_order: number
          status: string
          system_name: string
          updated_at: string
          visual_description: string
        }
        Insert: {
          allows_personal_name?: boolean
          availability_tier?: string
          character_id: string
          config_code: string
          created_at?: string
          default_background_key: string
          default_outfit_key: string
          default_personality_key: string
          display_name: string
          metadata?: Json
          presentation_style: string
          representation_tags?: string[]
          sort_order?: number
          status?: string
          system_name?: string
          updated_at?: string
          visual_description: string
        }
        Update: {
          allows_personal_name?: boolean
          availability_tier?: string
          character_id?: string
          config_code?: string
          created_at?: string
          default_background_key?: string
          default_outfit_key?: string
          default_personality_key?: string
          display_name?: string
          metadata?: Json
          presentation_style?: string
          representation_tags?: string[]
          sort_order?: number
          status?: string
          system_name?: string
          updated_at?: string
          visual_description?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistant_character_profiles_default_background_key_fkey"
            columns: ["default_background_key"]
            isOneToOne: false
            referencedRelation: "assistant_background_presets"
            referencedColumns: ["background_key"]
          },
          {
            foreignKeyName: "assistant_character_profiles_default_outfit_key_fkey"
            columns: ["default_outfit_key"]
            isOneToOne: false
            referencedRelation: "assistant_outfit_presets"
            referencedColumns: ["outfit_key"]
          },
          {
            foreignKeyName: "assistant_character_profiles_default_personality_key_fkey"
            columns: ["default_personality_key"]
            isOneToOne: false
            referencedRelation: "assistant_personality_presets"
            referencedColumns: ["preset_key"]
          },
        ]
      }
      assistant_messages: {
        Row: {
          citations: Json
          confidence_score: number | null
          content: string
          created_at: string
          id: string
          in_reply_to: string | null
          intent_key: string | null
          message_kind: string
          retrieval_metadata: Json
          sender_type: string
          sensitivity: string
          session_id: string
        }
        Insert: {
          citations?: Json
          confidence_score?: number | null
          content: string
          created_at?: string
          id?: string
          in_reply_to?: string | null
          intent_key?: string | null
          message_kind?: string
          retrieval_metadata?: Json
          sender_type: string
          sensitivity?: string
          session_id: string
        }
        Update: {
          citations?: Json
          confidence_score?: number | null
          content?: string
          created_at?: string
          id?: string
          in_reply_to?: string | null
          intent_key?: string | null
          message_kind?: string
          retrieval_metadata?: Json
          sender_type?: string
          sensitivity?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistant_messages_in_reply_to_fkey"
            columns: ["in_reply_to"]
            isOneToOne: false
            referencedRelation: "assistant_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      assistant_outfit_presets: {
        Row: {
          assistant_key: string
          availability: string
          category: string
          created_at: string
          description: string
          id: string
          name: string
          outfit_key: string
          sort_order: number
          status: string
          visual_spec: Json
        }
        Insert: {
          assistant_key?: string
          availability?: string
          category: string
          created_at?: string
          description: string
          id?: string
          name: string
          outfit_key: string
          sort_order?: number
          status?: string
          visual_spec?: Json
        }
        Update: {
          assistant_key?: string
          availability?: string
          category?: string
          created_at?: string
          description?: string
          id?: string
          name?: string
          outfit_key?: string
          sort_order?: number
          status?: string
          visual_spec?: Json
        }
        Relationships: []
      }
      assistant_personality_presets: {
        Row: {
          assistant_key: string
          behavior_traits: Json
          communication_profile: Json
          created_at: string
          default_intensity: number
          description: string
          guardrails: Json
          id: string
          is_canonical: boolean
          is_legacy: boolean
          name: string
          personality_group: string
          preset_key: string
          sample_greeting: string
          sort_order: number
          status: string
          tone_rules: Json
          user_selectable: boolean
        }
        Insert: {
          assistant_key?: string
          behavior_traits?: Json
          communication_profile?: Json
          created_at?: string
          default_intensity?: number
          description: string
          guardrails?: Json
          id?: string
          is_canonical?: boolean
          is_legacy?: boolean
          name: string
          personality_group?: string
          preset_key: string
          sample_greeting: string
          sort_order?: number
          status?: string
          tone_rules?: Json
          user_selectable?: boolean
        }
        Update: {
          assistant_key?: string
          behavior_traits?: Json
          communication_profile?: Json
          created_at?: string
          default_intensity?: number
          description?: string
          guardrails?: Json
          id?: string
          is_canonical?: boolean
          is_legacy?: boolean
          name?: string
          personality_group?: string
          preset_key?: string
          sample_greeting?: string
          sort_order?: number
          status?: string
          tone_rules?: Json
          user_selectable?: boolean
        }
        Relationships: []
      }
      assistant_sessions: {
        Row: {
          assistant_id: string
          channel: string
          context_metadata: Json
          ended_at: string | null
          id: string
          last_activity_at: string
          organization_id: string | null
          profile_id: string | null
          session_status: string
          started_at: string
          tenant_id: string | null
          title: string | null
        }
        Insert: {
          assistant_id: string
          channel?: string
          context_metadata?: Json
          ended_at?: string | null
          id?: string
          last_activity_at?: string
          organization_id?: string | null
          profile_id?: string | null
          session_status?: string
          started_at?: string
          tenant_id?: string | null
          title?: string | null
        }
        Update: {
          assistant_id?: string
          channel?: string
          context_metadata?: Json
          ended_at?: string | null
          id?: string
          last_activity_at?: string
          organization_id?: string | null
          profile_id?: string | null
          session_status?: string
          started_at?: string
          tenant_id?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assistant_sessions_assistant_id_fkey"
            columns: ["assistant_id"]
            isOneToOne: false
            referencedRelation: "assistants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_sessions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_sessions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "assistant_sessions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_sessions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "assistant_sessions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      assistant_theme_presets: {
        Row: {
          accessibility: Json
          created_at: string
          description: string
          id: string
          name: string
          palette: Json
          sort_order: number
          status: string
          theme_key: string
        }
        Insert: {
          accessibility?: Json
          created_at?: string
          description: string
          id?: string
          name: string
          palette?: Json
          sort_order?: number
          status?: string
          theme_key: string
        }
        Update: {
          accessibility?: Json
          created_at?: string
          description?: string
          id?: string
          name?: string
          palette?: Json
          sort_order?: number
          status?: string
          theme_key?: string
        }
        Relationships: []
      }
      assistant_ticket_actions: {
        Row: {
          action_status: string
          action_type: string
          approval_required: boolean
          approved_by: string | null
          assistant_key: string
          created_at: string
          details: Json
          executed_at: string | null
          id: string
          organization_id: string
          summary: string
          tenant_id: string | null
          ticket_id: string | null
          user_profile_id: string | null
          verified_at: string | null
        }
        Insert: {
          action_status?: string
          action_type: string
          approval_required?: boolean
          approved_by?: string | null
          assistant_key: string
          created_at?: string
          details?: Json
          executed_at?: string | null
          id?: string
          organization_id: string
          summary: string
          tenant_id?: string | null
          ticket_id?: string | null
          user_profile_id?: string | null
          verified_at?: string | null
        }
        Update: {
          action_status?: string
          action_type?: string
          approval_required?: boolean
          approved_by?: string | null
          assistant_key?: string
          created_at?: string
          details?: Json
          executed_at?: string | null
          id?: string
          organization_id?: string
          summary?: string
          tenant_id?: string | null
          ticket_id?: string | null
          user_profile_id?: string | null
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assistant_ticket_actions_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_ticket_actions_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "assistant_ticket_actions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_ticket_actions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "assistant_ticket_actions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_ticket_actions_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_ticket_actions_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_ticket_actions_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      assistant_user_avatar_configs: {
        Row: {
          character_id: string
          config_key: string
          created_at: string
          custom_asset_storage_path: string | null
          display_name: string | null
          feature_selections: Json
          id: string
          is_default: boolean
          locale: string
          profile_id: string
          renderer_mode: string
          updated_at: string
          version: number
        }
        Insert: {
          character_id: string
          config_key: string
          created_at?: string
          custom_asset_storage_path?: string | null
          display_name?: string | null
          feature_selections?: Json
          id?: string
          is_default?: boolean
          locale?: string
          profile_id: string
          renderer_mode?: string
          updated_at?: string
          version?: number
        }
        Update: {
          character_id?: string
          config_key?: string
          created_at?: string
          custom_asset_storage_path?: string | null
          display_name?: string | null
          feature_selections?: Json
          id?: string
          is_default?: boolean
          locale?: string
          profile_id?: string
          renderer_mode?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "assistant_user_avatar_configs_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "assistant_character_profiles"
            referencedColumns: ["character_id"]
          },
          {
            foreignKeyName: "assistant_user_avatar_configs_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_user_avatar_configs_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      assistant_vocabulary_entries: {
        Row: {
          assistant_key: string
          canonical_meaning: string
          category: string
          created_at: string
          id: string
          intent_key: string
          locale: string
          phrase: string
          status: string
          suggested_response_style: string
          tags: string[]
        }
        Insert: {
          assistant_key?: string
          canonical_meaning: string
          category: string
          created_at?: string
          id?: string
          intent_key: string
          locale?: string
          phrase: string
          status?: string
          suggested_response_style?: string
          tags?: string[]
        }
        Update: {
          assistant_key?: string
          canonical_meaning?: string
          category?: string
          created_at?: string
          id?: string
          intent_key?: string
          locale?: string
          phrase?: string
          status?: string
          suggested_response_style?: string
          tags?: string[]
        }
        Relationships: []
      }
      assistant_wardrobe_catalog: {
        Row: {
          availability_tier: string
          color_options: Json
          created_at: string
          description: string
          id: string
          item_key: string
          item_type: string
          name: string
          presentation_tags: string[]
          sort_order: number
          status: string
          style_tags: string[]
          updated_at: string
          visual_spec: Json
        }
        Insert: {
          availability_tier?: string
          color_options?: Json
          created_at?: string
          description?: string
          id?: string
          item_key: string
          item_type: string
          name: string
          presentation_tags?: string[]
          sort_order?: number
          status?: string
          style_tags?: string[]
          updated_at?: string
          visual_spec?: Json
        }
        Update: {
          availability_tier?: string
          color_options?: Json
          created_at?: string
          description?: string
          id?: string
          item_key?: string
          item_type?: string
          name?: string
          presentation_tags?: string[]
          sort_order?: number
          status?: string
          style_tags?: string[]
          updated_at?: string
          visual_spec?: Json
        }
        Relationships: []
      }
      assistant_wardrobe_daily_history: {
        Row: {
          created_at: string
          id: string
          look_snapshot: Json
          plan_id: string | null
          profile_id: string
          worn_on: string
        }
        Insert: {
          created_at?: string
          id?: string
          look_snapshot: Json
          plan_id?: string | null
          profile_id: string
          worn_on: string
        }
        Update: {
          created_at?: string
          id?: string
          look_snapshot?: Json
          plan_id?: string | null
          profile_id?: string
          worn_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistant_wardrobe_daily_history_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "assistant_wardrobe_weekly_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_wardrobe_daily_history_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_wardrobe_daily_history_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      assistant_wardrobe_daily_looks: {
        Row: {
          accessory_item_ids: string[]
          color_overrides: Json
          created_at: string
          handbag_item_id: string | null
          id: string
          notes: string | null
          outfit_item_id: string | null
          plan_id: string
          shoe_item_id: string | null
          updated_at: string
          weekday: number
        }
        Insert: {
          accessory_item_ids?: string[]
          color_overrides?: Json
          created_at?: string
          handbag_item_id?: string | null
          id?: string
          notes?: string | null
          outfit_item_id?: string | null
          plan_id: string
          shoe_item_id?: string | null
          updated_at?: string
          weekday: number
        }
        Update: {
          accessory_item_ids?: string[]
          color_overrides?: Json
          created_at?: string
          handbag_item_id?: string | null
          id?: string
          notes?: string | null
          outfit_item_id?: string | null
          plan_id?: string
          shoe_item_id?: string | null
          updated_at?: string
          weekday?: number
        }
        Relationships: [
          {
            foreignKeyName: "assistant_wardrobe_daily_looks_handbag_item_id_fkey"
            columns: ["handbag_item_id"]
            isOneToOne: false
            referencedRelation: "assistant_wardrobe_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_wardrobe_daily_looks_outfit_item_id_fkey"
            columns: ["outfit_item_id"]
            isOneToOne: false
            referencedRelation: "assistant_wardrobe_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_wardrobe_daily_looks_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "assistant_wardrobe_weekly_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_wardrobe_daily_looks_shoe_item_id_fkey"
            columns: ["shoe_item_id"]
            isOneToOne: false
            referencedRelation: "assistant_wardrobe_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      assistant_wardrobe_weekly_plans: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          plan_name: string
          profile_id: string
          timezone: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          plan_name?: string
          profile_id: string
          timezone?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          plan_name?: string
          profile_id?: string
          timezone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistant_wardrobe_weekly_plans_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assistant_wardrobe_weekly_plans_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      assistants: {
        Row: {
          assistant_key: string
          configuration: Json
          created_at: string
          id: string
          name: string
          purpose: string | null
          status: string
        }
        Insert: {
          assistant_key: string
          configuration?: Json
          created_at?: string
          id?: string
          name: string
          purpose?: string | null
          status?: string
        }
        Update: {
          assistant_key?: string
          configuration?: Json
          created_at?: string
          id?: string
          name?: string
          purpose?: string | null
          status?: string
        }
        Relationships: []
      }
      audit_events: {
        Row: {
          action: string
          actor_auth_user_id: string | null
          actor_profile_id: string | null
          created_at: string
          event_data: Json
          id: string
          ip_address: unknown
          organization_id: string | null
          outcome: string
          reason: string | null
          request_id: string | null
          resource_id: string | null
          resource_type: string
          tenant_id: string | null
          user_agent: string | null
        }
        Insert: {
          action: string
          actor_auth_user_id?: string | null
          actor_profile_id?: string | null
          created_at?: string
          event_data?: Json
          id?: string
          ip_address?: unknown
          organization_id?: string | null
          outcome?: string
          reason?: string | null
          request_id?: string | null
          resource_id?: string | null
          resource_type: string
          tenant_id?: string | null
          user_agent?: string | null
        }
        Update: {
          action?: string
          actor_auth_user_id?: string | null
          actor_profile_id?: string | null
          created_at?: string
          event_data?: Json
          id?: string
          ip_address?: unknown
          organization_id?: string | null
          outcome?: string
          reason?: string | null
          request_id?: string | null
          resource_id?: string | null
          resource_type?: string
          tenant_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "audit_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "audit_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      badge_catalog: {
        Row: {
          badge_key: string
          badge_name: string
          category: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          max_level: number
        }
        Insert: {
          badge_key: string
          badge_name: string
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          max_level?: number
        }
        Update: {
          badge_key?: string
          badge_name?: string
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          max_level?: number
        }
        Relationships: []
      }
      calendar_events: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          ends_at: string | null
          event_type: string
          id: string
          location: string | null
          organization_id: string
          starts_at: string
          title: string
          visibility: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          ends_at?: string | null
          event_type?: string
          id?: string
          location?: string | null
          organization_id: string
          starts_at: string
          title: string
          visibility?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          ends_at?: string | null
          event_type?: string
          id?: string
          location?: string | null
          organization_id?: string
          starts_at?: string
          title?: string
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "calendar_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      candidate_profiles: {
        Row: {
          availability_status: string
          available_from: string | null
          created_at: string
          desired_pay_max: number | null
          desired_pay_min: number | null
          employment_types: string[]
          headline: string | null
          home_city: string | null
          home_country: string
          home_postal_code: string | null
          home_region: string | null
          id: string
          max_commute_minutes: number | null
          notification_preferences: Json
          pay_currency: string
          pay_period: string
          preferred_travel_modes: string[]
          profile_id: string
          profile_visibility: string
          resume_storage_path: string | null
          summary: string | null
          updated_at: string
          willing_to_travel: boolean
        }
        Insert: {
          availability_status?: string
          available_from?: string | null
          created_at?: string
          desired_pay_max?: number | null
          desired_pay_min?: number | null
          employment_types?: string[]
          headline?: string | null
          home_city?: string | null
          home_country?: string
          home_postal_code?: string | null
          home_region?: string | null
          id?: string
          max_commute_minutes?: number | null
          notification_preferences?: Json
          pay_currency?: string
          pay_period?: string
          preferred_travel_modes?: string[]
          profile_id: string
          profile_visibility?: string
          resume_storage_path?: string | null
          summary?: string | null
          updated_at?: string
          willing_to_travel?: boolean
        }
        Update: {
          availability_status?: string
          available_from?: string | null
          created_at?: string
          desired_pay_max?: number | null
          desired_pay_min?: number | null
          employment_types?: string[]
          headline?: string | null
          home_city?: string | null
          home_country?: string
          home_postal_code?: string | null
          home_region?: string | null
          id?: string
          max_commute_minutes?: number | null
          notification_preferences?: Json
          pay_currency?: string
          pay_period?: string
          preferred_travel_modes?: string[]
          profile_id?: string
          profile_visibility?: string
          resume_storage_path?: string | null
          summary?: string | null
          updated_at?: string
          willing_to_travel?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "candidate_profiles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_profiles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      candidate_skills: {
        Row: {
          candidate_profile_id: string
          proficiency: string
          skill_id: string
          verification_source: string | null
          verified: boolean
          years_experience: number | null
        }
        Insert: {
          candidate_profile_id: string
          proficiency?: string
          skill_id: string
          verification_source?: string | null
          verified?: boolean
          years_experience?: number | null
        }
        Update: {
          candidate_profile_id?: string
          proficiency?: string
          skill_id?: string
          verification_source?: string | null
          verified?: boolean
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_skills_candidate_profile_id_fkey"
            columns: ["candidate_profile_id"]
            isOneToOne: false
            referencedRelation: "candidate_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["id"]
          },
        ]
      }
      command_work_item_approvals: {
        Row: {
          approver_profile_id: string | null
          decided_at: string | null
          decided_by_profile_id: string | null
          decision_reason: string | null
          id: string
          organization_id: string
          reason: string
          requested_at: string
          requested_by_profile_id: string
          status: string
          tenant_id: string | null
          work_item_id: string
        }
        Insert: {
          approver_profile_id?: string | null
          decided_at?: string | null
          decided_by_profile_id?: string | null
          decision_reason?: string | null
          id?: string
          organization_id: string
          reason: string
          requested_at?: string
          requested_by_profile_id: string
          status?: string
          tenant_id?: string | null
          work_item_id: string
        }
        Update: {
          approver_profile_id?: string | null
          decided_at?: string | null
          decided_by_profile_id?: string | null
          decision_reason?: string | null
          id?: string
          organization_id?: string
          reason?: string
          requested_at?: string
          requested_by_profile_id?: string
          status?: string
          tenant_id?: string | null
          work_item_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "command_work_item_approvals_approver_profile_id_fkey"
            columns: ["approver_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_approver_profile_id_fkey"
            columns: ["approver_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_decided_by_profile_id_fkey"
            columns: ["decided_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_decided_by_profile_id_fkey"
            columns: ["decided_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_requested_by_profile_id_fkey"
            columns: ["requested_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_requested_by_profile_id_fkey"
            columns: ["requested_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_approvals_work_item_id_fkey"
            columns: ["work_item_id"]
            isOneToOne: false
            referencedRelation: "command_work_items"
            referencedColumns: ["id"]
          },
        ]
      }
      command_work_item_events: {
        Row: {
          actor_profile_id: string
          created_at: string
          event_type: string
          from_value: Json
          id: string
          note: string | null
          organization_id: string
          tenant_id: string | null
          to_value: Json
          work_item_id: string
        }
        Insert: {
          actor_profile_id: string
          created_at?: string
          event_type: string
          from_value?: Json
          id?: string
          note?: string | null
          organization_id: string
          tenant_id?: string | null
          to_value?: Json
          work_item_id: string
        }
        Update: {
          actor_profile_id?: string
          created_at?: string
          event_type?: string
          from_value?: Json
          id?: string
          note?: string | null
          organization_id?: string
          tenant_id?: string | null
          to_value?: Json
          work_item_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "command_work_item_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "command_work_item_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "command_work_item_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_item_events_work_item_id_fkey"
            columns: ["work_item_id"]
            isOneToOne: false
            referencedRelation: "command_work_items"
            referencedColumns: ["id"]
          },
        ]
      }
      command_work_items: {
        Row: {
          assignee_profile_id: string | null
          assistant_session_id: string | null
          completed_at: string | null
          created_at: string
          created_by_profile_id: string
          description: string | null
          due_at: string | null
          id: string
          organization_id: string
          priority: string
          requires_approval: boolean
          sort_order: number
          source_id: string | null
          source_type: string
          status: string
          tenant_id: string | null
          title: string
          updated_at: string
          workflow_run_id: string | null
        }
        Insert: {
          assignee_profile_id?: string | null
          assistant_session_id?: string | null
          completed_at?: string | null
          created_at?: string
          created_by_profile_id: string
          description?: string | null
          due_at?: string | null
          id?: string
          organization_id: string
          priority?: string
          requires_approval?: boolean
          sort_order?: number
          source_id?: string | null
          source_type?: string
          status?: string
          tenant_id?: string | null
          title: string
          updated_at?: string
          workflow_run_id?: string | null
        }
        Update: {
          assignee_profile_id?: string | null
          assistant_session_id?: string | null
          completed_at?: string | null
          created_at?: string
          created_by_profile_id?: string
          description?: string | null
          due_at?: string | null
          id?: string
          organization_id?: string
          priority?: string
          requires_approval?: boolean
          sort_order?: number
          source_id?: string | null
          source_type?: string
          status?: string
          tenant_id?: string | null
          title?: string
          updated_at?: string
          workflow_run_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "command_work_items_assignee_profile_id_fkey"
            columns: ["assignee_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_items_assignee_profile_id_fkey"
            columns: ["assignee_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "command_work_items_assistant_session_id_fkey"
            columns: ["assistant_session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_items_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_items_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "command_work_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "command_work_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "command_work_items_workflow_run_id_fkey"
            columns: ["workflow_run_id"]
            isOneToOne: false
            referencedRelation: "workflow_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      company_announcements: {
        Row: {
          audience: string
          body: string
          category: string
          created_at: string
          created_by: string
          expires_at: string | null
          id: string
          is_pinned: boolean
          organization_id: string
          priority: string
          starts_at: string
          status: string
          tenant_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          audience?: string
          body: string
          category?: string
          created_at?: string
          created_by: string
          expires_at?: string | null
          id?: string
          is_pinned?: boolean
          organization_id: string
          priority?: string
          starts_at?: string
          status?: string
          tenant_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          audience?: string
          body?: string
          category?: string
          created_at?: string
          created_by?: string
          expires_at?: string | null
          id?: string
          is_pinned?: boolean
          organization_id?: string
          priority?: string
          starts_at?: string
          status?: string
          tenant_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "company_announcements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_announcements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "company_announcements_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      company_financial_transactions: {
        Row: {
          amount: number
          category: string
          created_at: string
          currency: string
          customer_account_id: string | null
          description: string
          history_batch_id: string | null
          id: string
          invoice_id: string | null
          metadata: Json
          organization_id: string
          reference: string | null
          sale_id: string | null
          transaction_date: string
          transaction_number: string
          transaction_status: string
          transaction_type: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          currency?: string
          customer_account_id?: string | null
          description: string
          history_batch_id?: string | null
          id?: string
          invoice_id?: string | null
          metadata?: Json
          organization_id: string
          reference?: string | null
          sale_id?: string | null
          transaction_date: string
          transaction_number: string
          transaction_status?: string
          transaction_type: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          currency?: string
          customer_account_id?: string | null
          description?: string
          history_batch_id?: string | null
          id?: string
          invoice_id?: string | null
          metadata?: Json
          organization_id?: string
          reference?: string | null
          sale_id?: string | null
          transaction_date?: string
          transaction_number?: string
          transaction_status?: string
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_financial_transactions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "marketplace_customer_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_financial_transactions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_financial_transactions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_financial_transactions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_financial_transactions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_financial_transactions_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_financial_transactions_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "company_invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_financial_transactions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_financial_transactions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "company_financial_transactions_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "marketplace_sales"
            referencedColumns: ["id"]
          },
        ]
      }
      company_history_batches: {
        Row: {
          batch_key: string
          completed_at: string | null
          created_at: string
          founding_date: string
          id: string
          notes: string | null
          organization_id: string
          record_counts: Json
          status: string
          through_date: string
        }
        Insert: {
          batch_key: string
          completed_at?: string | null
          created_at?: string
          founding_date?: string
          id?: string
          notes?: string | null
          organization_id: string
          record_counts?: Json
          status?: string
          through_date?: string
        }
        Update: {
          batch_key?: string
          completed_at?: string | null
          created_at?: string
          founding_date?: string
          id?: string
          notes?: string | null
          organization_id?: string
          record_counts?: Json
          status?: string
          through_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_history_batches_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_history_batches_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      company_invoices: {
        Row: {
          amount_paid: number
          balance_due: number
          created_at: string
          currency: string
          customer_account_id: string
          due_at: string
          history_batch_id: string | null
          id: string
          invoice_number: string
          invoice_status: string
          issued_at: string
          metadata: Json
          organization_id: string
          paid_at: string | null
          sale_id: string | null
          subtotal: number
          tax_total: number
          total: number
        }
        Insert: {
          amount_paid?: number
          balance_due?: number
          created_at?: string
          currency?: string
          customer_account_id: string
          due_at: string
          history_batch_id?: string | null
          id?: string
          invoice_number: string
          invoice_status: string
          issued_at: string
          metadata?: Json
          organization_id: string
          paid_at?: string | null
          sale_id?: string | null
          subtotal?: number
          tax_total?: number
          total?: number
        }
        Update: {
          amount_paid?: number
          balance_due?: number
          created_at?: string
          currency?: string
          customer_account_id?: string
          due_at?: string
          history_batch_id?: string | null
          id?: string
          invoice_number?: string
          invoice_status?: string
          issued_at?: string
          metadata?: Json
          organization_id?: string
          paid_at?: string | null
          sale_id?: string | null
          subtotal?: number
          tax_total?: number
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "company_invoices_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "marketplace_customer_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_invoices_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_invoices_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_invoices_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_invoices_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "company_invoices_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "company_invoices_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "marketplace_sales"
            referencedColumns: ["id"]
          },
        ]
      }
      company_site_pages: {
        Row: {
          body_html: string
          category: string
          created_at: string
          is_published: boolean
          lead: string
          page_key: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          body_html?: string
          category: string
          created_at?: string
          is_published?: boolean
          lead?: string
          page_key: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          body_html?: string
          category?: string
          created_at?: string
          is_published?: boolean
          lead?: string
          page_key?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      connected_workspace_members: {
        Row: {
          approved_at: string | null
          created_at: string
          id: string
          invited_by_profile_id: string | null
          member_role: string
          organization_id: string
          status: string
          workforce_person_id: string
          workspace_id: string
        }
        Insert: {
          approved_at?: string | null
          created_at?: string
          id?: string
          invited_by_profile_id?: string | null
          member_role: string
          organization_id: string
          status?: string
          workforce_person_id: string
          workspace_id: string
        }
        Update: {
          approved_at?: string | null
          created_at?: string
          id?: string
          invited_by_profile_id?: string | null
          member_role?: string
          organization_id?: string
          status?: string
          workforce_person_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "connected_workspace_members_invited_by_profile_id_fkey"
            columns: ["invited_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connected_workspace_members_invited_by_profile_id_fkey"
            columns: ["invited_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "connected_workspace_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connected_workspace_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "connected_workspace_members_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "connected_workspace_members_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connected_workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "connected_workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      connected_workspaces: {
        Row: {
          created_at: string
          created_by_profile_id: string | null
          id: string
          owner_organization_id: string
          purpose: string
          relationship_id: string
          status: string
          updated_at: string
          workspace_name: string
        }
        Insert: {
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          owner_organization_id: string
          purpose: string
          relationship_id: string
          status?: string
          updated_at?: string
          workspace_name: string
        }
        Update: {
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          owner_organization_id?: string
          purpose?: string
          relationship_id?: string
          status?: string
          updated_at?: string
          workspace_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "connected_workspaces_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connected_workspaces_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "connected_workspaces_owner_organization_id_fkey"
            columns: ["owner_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connected_workspaces_owner_organization_id_fkey"
            columns: ["owner_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "connected_workspaces_relationship_id_fkey"
            columns: ["relationship_id"]
            isOneToOne: false
            referencedRelation: "federation_relationships"
            referencedColumns: ["id"]
          },
        ]
      }
      departments: {
        Row: {
          code: string | null
          created_at: string
          id: string
          manager_profile_id: string | null
          name: string
          organization_id: string
          parent_department_id: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string
          id?: string
          manager_profile_id?: string | null
          name: string
          organization_id: string
          parent_department_id?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: string
          manager_profile_id?: string | null
          name?: string
          organization_id?: string
          parent_department_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "departments_manager_profile_fk"
            columns: ["manager_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_manager_profile_fk"
            columns: ["manager_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "departments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "departments_parent_department_id_fkey"
            columns: ["parent_department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      device_assignment_history: {
        Row: {
          approved_by_profile_id: string | null
          assigned_at: string
          assigned_profile_id: string | null
          assignment_type: string
          condition_on_issue: string | null
          condition_on_return: string | null
          created_at: string
          device_id: string
          history_batch_id: string | null
          id: string
          notes: string | null
          returned_at: string | null
          workforce_person_id: string | null
        }
        Insert: {
          approved_by_profile_id?: string | null
          assigned_at?: string
          assigned_profile_id?: string | null
          assignment_type: string
          condition_on_issue?: string | null
          condition_on_return?: string | null
          created_at?: string
          device_id: string
          history_batch_id?: string | null
          id?: string
          notes?: string | null
          returned_at?: string | null
          workforce_person_id?: string | null
        }
        Update: {
          approved_by_profile_id?: string | null
          assigned_at?: string
          assigned_profile_id?: string | null
          assignment_type?: string
          condition_on_issue?: string | null
          condition_on_return?: string | null
          created_at?: string
          device_id?: string
          history_batch_id?: string | null
          id?: string
          notes?: string | null
          returned_at?: string | null
          workforce_person_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "device_assignment_history_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_assignment_history_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "device_assignment_history_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_assignment_history_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "device_assignment_history_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_assignment_history_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_assignment_history_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "device_assignment_history_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      device_compliance_checks: {
        Row: {
          check_source: string
          checked_at: string
          created_at: string
          device_id: string
          evidence: Json
          history_batch_id: string | null
          id: string
          policy_key: string
          remediation_guidance: string | null
          result: string
          reviewed_by_profile_id: string | null
          severity: string | null
        }
        Insert: {
          check_source?: string
          checked_at?: string
          created_at?: string
          device_id: string
          evidence?: Json
          history_batch_id?: string | null
          id?: string
          policy_key: string
          remediation_guidance?: string | null
          result: string
          reviewed_by_profile_id?: string | null
          severity?: string | null
        }
        Update: {
          check_source?: string
          checked_at?: string
          created_at?: string
          device_id?: string
          evidence?: Json
          history_batch_id?: string | null
          id?: string
          policy_key?: string
          remediation_guidance?: string | null
          result?: string
          reviewed_by_profile_id?: string | null
          severity?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "device_compliance_checks_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_compliance_checks_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_compliance_checks_reviewed_by_profile_id_fkey"
            columns: ["reviewed_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_compliance_checks_reviewed_by_profile_id_fkey"
            columns: ["reviewed_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      device_lifecycle_events: {
        Row: {
          actor_profile_id: string | null
          created_at: string
          details: Json
          device_id: string
          event_at: string
          event_type: string
          history_batch_id: string | null
          id: string
        }
        Insert: {
          actor_profile_id?: string | null
          created_at?: string
          details?: Json
          device_id: string
          event_at?: string
          event_type: string
          history_batch_id?: string | null
          id?: string
        }
        Update: {
          actor_profile_id?: string | null
          created_at?: string
          details?: Json
          device_id?: string
          event_at?: string
          event_type?: string
          history_batch_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "device_lifecycle_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_lifecycle_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "device_lifecycle_events_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_lifecycle_events_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
        ]
      }
      device_software_inventory: {
        Row: {
          created_at: string
          device_id: string
          id: string
          install_source: string | null
          installed_at: string | null
          last_seen_at: string | null
          metadata: Json
          publisher: string | null
          risk_status: string
          software_name: string
          version: string | null
        }
        Insert: {
          created_at?: string
          device_id: string
          id?: string
          install_source?: string | null
          installed_at?: string | null
          last_seen_at?: string | null
          metadata?: Json
          publisher?: string | null
          risk_status?: string
          software_name: string
          version?: string | null
        }
        Update: {
          created_at?: string
          device_id?: string
          id?: string
          install_source?: string | null
          installed_at?: string | null
          last_seen_at?: string | null
          metadata?: Json
          publisher?: string | null
          risk_status?: string
          software_name?: string
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "device_software_inventory_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
        ]
      }
      device_type_catalog: {
        Row: {
          asset_class: string
          default_assignment_type: string
          description: string
          device_type_key: string
          display_name: string
          is_active: boolean
          sort_order: number
        }
        Insert: {
          asset_class: string
          default_assignment_type: string
          description: string
          device_type_key: string
          display_name: string
          is_active?: boolean
          sort_order?: number
        }
        Update: {
          asset_class?: string
          default_assignment_type?: string
          description?: string
          device_type_key?: string
          display_name?: string
          is_active?: boolean
          sort_order?: number
        }
        Relationships: []
      }
      devices: {
        Row: {
          acquisition_cost: number | null
          asset_class: string
          asset_tag: string | null
          assigned_at: string | null
          assigned_profile_id: string | null
          assignment_type: string
          building: string | null
          compliance_checked_at: string | null
          compliance_status: string
          created_at: string
          currency_code: string
          data_wipe_verified_at: string | null
          device_display_name: string | null
          device_name: string
          device_status: Database["public"]["Enums"]["asset_status"]
          device_type: string
          directory_join_type: string | null
          disposal_method: string | null
          domain_name: string | null
          encryption_status: string
          endpoint_protection_status: string
          enrollment_status: string
          firewall_status: string
          floor_label: string | null
          history_batch_id: string | null
          hostname: string | null
          id: string
          inventory: Json
          last_inventory_at: string | null
          last_seen_at: string | null
          lease_end_date: string | null
          location_name: string | null
          management_platform: string | null
          management_source: string | null
          manufacturer: string | null
          manufacturer_serial_hash: string | null
          memory_gb: number | null
          metadata: Json
          model: string | null
          next_review_at: string | null
          operating_system: string | null
          organization_id: string
          organizational_unit_id: string | null
          os_build: string | null
          os_version: string | null
          ownership_type: string
          privacy_scope: string
          processor: string | null
          purchase_date: string | null
          readable_device_id: string | null
          remote_lock_allowed: boolean
          remote_wipe_allowed: boolean
          retired_at: string | null
          room_label: string | null
          secure_boot_status: string
          serial_number: string | null
          storage_gb: number | null
          tenant_id: string | null
          updated_at: string
          warranty_expiration: string | null
          workforce_person_id: string | null
        }
        Insert: {
          acquisition_cost?: number | null
          asset_class?: string
          asset_tag?: string | null
          assigned_at?: string | null
          assigned_profile_id?: string | null
          assignment_type?: string
          building?: string | null
          compliance_checked_at?: string | null
          compliance_status?: string
          created_at?: string
          currency_code?: string
          data_wipe_verified_at?: string | null
          device_display_name?: string | null
          device_name: string
          device_status?: Database["public"]["Enums"]["asset_status"]
          device_type?: string
          directory_join_type?: string | null
          disposal_method?: string | null
          domain_name?: string | null
          encryption_status?: string
          endpoint_protection_status?: string
          enrollment_status?: string
          firewall_status?: string
          floor_label?: string | null
          history_batch_id?: string | null
          hostname?: string | null
          id?: string
          inventory?: Json
          last_inventory_at?: string | null
          last_seen_at?: string | null
          lease_end_date?: string | null
          location_name?: string | null
          management_platform?: string | null
          management_source?: string | null
          manufacturer?: string | null
          manufacturer_serial_hash?: string | null
          memory_gb?: number | null
          metadata?: Json
          model?: string | null
          next_review_at?: string | null
          operating_system?: string | null
          organization_id: string
          organizational_unit_id?: string | null
          os_build?: string | null
          os_version?: string | null
          ownership_type?: string
          privacy_scope?: string
          processor?: string | null
          purchase_date?: string | null
          readable_device_id?: string | null
          remote_lock_allowed?: boolean
          remote_wipe_allowed?: boolean
          retired_at?: string | null
          room_label?: string | null
          secure_boot_status?: string
          serial_number?: string | null
          storage_gb?: number | null
          tenant_id?: string | null
          updated_at?: string
          warranty_expiration?: string | null
          workforce_person_id?: string | null
        }
        Update: {
          acquisition_cost?: number | null
          asset_class?: string
          asset_tag?: string | null
          assigned_at?: string | null
          assigned_profile_id?: string | null
          assignment_type?: string
          building?: string | null
          compliance_checked_at?: string | null
          compliance_status?: string
          created_at?: string
          currency_code?: string
          data_wipe_verified_at?: string | null
          device_display_name?: string | null
          device_name?: string
          device_status?: Database["public"]["Enums"]["asset_status"]
          device_type?: string
          directory_join_type?: string | null
          disposal_method?: string | null
          domain_name?: string | null
          encryption_status?: string
          endpoint_protection_status?: string
          enrollment_status?: string
          firewall_status?: string
          floor_label?: string | null
          history_batch_id?: string | null
          hostname?: string | null
          id?: string
          inventory?: Json
          last_inventory_at?: string | null
          last_seen_at?: string | null
          lease_end_date?: string | null
          location_name?: string | null
          management_platform?: string | null
          management_source?: string | null
          manufacturer?: string | null
          manufacturer_serial_hash?: string | null
          memory_gb?: number | null
          metadata?: Json
          model?: string | null
          next_review_at?: string | null
          operating_system?: string | null
          organization_id?: string
          organizational_unit_id?: string | null
          os_build?: string | null
          os_version?: string | null
          ownership_type?: string
          privacy_scope?: string
          processor?: string | null
          purchase_date?: string | null
          readable_device_id?: string | null
          remote_lock_allowed?: boolean
          remote_wipe_allowed?: boolean
          retired_at?: string | null
          room_label?: string | null
          secure_boot_status?: string
          serial_number?: string | null
          storage_gb?: number | null
          tenant_id?: string | null
          updated_at?: string
          warranty_expiration?: string | null
          workforce_person_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "devices_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "devices_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "devices_organizational_unit_id_fkey"
            columns: ["organizational_unit_id"]
            isOneToOne: false
            referencedRelation: "organizational_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "devices_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_badge_progress: {
        Row: {
          badge_id: string
          current_level: number
          id: string
          last_awarded_at: string | null
          level_started_at: string | null
          profile_id: string
          progress_value: number
          updated_at: string
        }
        Insert: {
          badge_id: string
          current_level?: number
          id?: string
          last_awarded_at?: string | null
          level_started_at?: string | null
          profile_id: string
          progress_value?: number
          updated_at?: string
        }
        Update: {
          badge_id?: string
          current_level?: number
          id?: string
          last_awarded_at?: string | null
          level_started_at?: string | null
          profile_id?: string
          progress_value?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "employee_badge_progress_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badge_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_badge_progress_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_badge_progress_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      employee_progress: {
        Row: {
          overall_level: number
          profile_id: string
          stars_total: number
          updated_at: string
          xp_total: number
        }
        Insert: {
          overall_level?: number
          profile_id: string
          stars_total?: number
          updated_at?: string
          xp_total?: number
        }
        Update: {
          overall_level?: number
          profile_id?: string
          stars_total?: number
          updated_at?: string
          xp_total?: number
        }
        Relationships: [
          {
            foreignKeyName: "employee_progress_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_progress_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      employee_rewards: {
        Row: {
          awarded_by: string | null
          created_at: string
          id: string
          level: string | null
          points: number
          profile_id: string
          reason: string | null
          related_ticket_id: string | null
          stars: number
        }
        Insert: {
          awarded_by?: string | null
          created_at?: string
          id?: string
          level?: string | null
          points?: number
          profile_id: string
          reason?: string | null
          related_ticket_id?: string | null
          stars?: number
        }
        Update: {
          awarded_by?: string | null
          created_at?: string
          id?: string
          level?: string | null
          points?: number
          profile_id?: string
          reason?: string | null
          related_ticket_id?: string | null
          stars?: number
        }
        Relationships: [
          {
            foreignKeyName: "employee_rewards_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_rewards_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "employee_rewards_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_rewards_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "employee_rewards_related_ticket_id_fkey"
            columns: ["related_ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_star_transactions: {
        Row: {
          awarded_by: string | null
          created_at: string
          id: string
          is_test_data: boolean
          profile_id: string
          reason: string
          related_ticket_id: string | null
          stars_delta: number
        }
        Insert: {
          awarded_by?: string | null
          created_at?: string
          id?: string
          is_test_data?: boolean
          profile_id: string
          reason: string
          related_ticket_id?: string | null
          stars_delta: number
        }
        Update: {
          awarded_by?: string | null
          created_at?: string
          id?: string
          is_test_data?: boolean
          profile_id?: string
          reason?: string
          related_ticket_id?: string | null
          stars_delta?: number
        }
        Relationships: [
          {
            foreignKeyName: "employee_star_transactions_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_star_transactions_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "employee_star_transactions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_star_transactions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "employee_star_transactions_related_ticket_id_fkey"
            columns: ["related_ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_xp_transactions: {
        Row: {
          awarded_by: string | null
          created_at: string
          id: string
          is_test_data: boolean
          profile_id: string
          reason: string
          related_ticket_id: string | null
          xp_delta: number
        }
        Insert: {
          awarded_by?: string | null
          created_at?: string
          id?: string
          is_test_data?: boolean
          profile_id: string
          reason: string
          related_ticket_id?: string | null
          xp_delta: number
        }
        Update: {
          awarded_by?: string | null
          created_at?: string
          id?: string
          is_test_data?: boolean
          profile_id?: string
          reason?: string
          related_ticket_id?: string | null
          xp_delta?: number
        }
        Relationships: [
          {
            foreignKeyName: "employee_xp_transactions_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_xp_transactions_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "employee_xp_transactions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_xp_transactions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "employee_xp_transactions_related_ticket_id_fkey"
            columns: ["related_ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      executive_period_reports: {
        Row: {
          created_at: string
          executive_summary: string
          history_batch_id: string | null
          id: string
          metrics: Json
          organization_id: string
          period_end: string
          period_start: string
          prepared_by_person_id: string | null
          report_number: string
          report_status: string
          report_type: string
          title: string
        }
        Insert: {
          created_at?: string
          executive_summary: string
          history_batch_id?: string | null
          id?: string
          metrics?: Json
          organization_id: string
          period_end: string
          period_start: string
          prepared_by_person_id?: string | null
          report_number: string
          report_status?: string
          report_type: string
          title: string
        }
        Update: {
          created_at?: string
          executive_summary?: string
          history_batch_id?: string | null
          id?: string
          metrics?: Json
          organization_id?: string
          period_end?: string
          period_start?: string
          prepared_by_person_id?: string | null
          report_number?: string
          report_status?: string
          report_type?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "executive_period_reports_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "executive_period_reports_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "executive_period_reports_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "executive_period_reports_prepared_by_person_id_fkey"
            columns: ["prepared_by_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "executive_period_reports_prepared_by_person_id_fkey"
            columns: ["prepared_by_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      federation_approvals: {
        Row: {
          approver_profile_id: string | null
          created_at: string
          decided_at: string | null
          decision: string
          decision_reason: string | null
          id: string
          organization_id: string
          relationship_id: string
        }
        Insert: {
          approver_profile_id?: string | null
          created_at?: string
          decided_at?: string | null
          decision?: string
          decision_reason?: string | null
          id?: string
          organization_id: string
          relationship_id: string
        }
        Update: {
          approver_profile_id?: string | null
          created_at?: string
          decided_at?: string | null
          decision?: string
          decision_reason?: string | null
          id?: string
          organization_id?: string
          relationship_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "federation_approvals_approver_profile_id_fkey"
            columns: ["approver_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_approvals_approver_profile_id_fkey"
            columns: ["approver_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "federation_approvals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_approvals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "federation_approvals_relationship_id_fkey"
            columns: ["relationship_id"]
            isOneToOne: false
            referencedRelation: "federation_relationships"
            referencedColumns: ["id"]
          },
        ]
      }
      federation_relationships: {
        Row: {
          created_at: string
          created_by_profile_id: string | null
          expires_at: string | null
          id: string
          purpose: string
          relationship_name: string
          requesting_organization_id: string
          starts_at: string | null
          status: string
          target_organization_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by_profile_id?: string | null
          expires_at?: string | null
          id?: string
          purpose: string
          relationship_name: string
          requesting_organization_id: string
          starts_at?: string | null
          status?: string
          target_organization_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by_profile_id?: string | null
          expires_at?: string | null
          id?: string
          purpose?: string
          relationship_name?: string
          requesting_organization_id?: string
          starts_at?: string | null
          status?: string
          target_organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "federation_relationships_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_relationships_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "federation_relationships_requesting_organization_id_fkey"
            columns: ["requesting_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_relationships_requesting_organization_id_fkey"
            columns: ["requesting_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "federation_relationships_target_organization_id_fkey"
            columns: ["target_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_relationships_target_organization_id_fkey"
            columns: ["target_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      federation_resource_grants: {
        Row: {
          approved_at: string | null
          approved_by_profile_id: string | null
          created_at: string
          expires_at: string | null
          id: string
          permitted_actions: string[]
          purpose: string
          relationship_id: string
          resource_id: string
          resource_owner_organization_id: string
          resource_type: string
          starts_at: string | null
          status: string
        }
        Insert: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          permitted_actions: string[]
          purpose: string
          relationship_id: string
          resource_id: string
          resource_owner_organization_id: string
          resource_type: string
          starts_at?: string | null
          status?: string
        }
        Update: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          permitted_actions?: string[]
          purpose?: string
          relationship_id?: string
          resource_id?: string
          resource_owner_organization_id?: string
          resource_type?: string
          starts_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "federation_resource_grants_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_resource_grants_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "federation_resource_grants_relationship_id_fkey"
            columns: ["relationship_id"]
            isOneToOne: false
            referencedRelation: "federation_relationships"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_resource_grants_resource_owner_organization_id_fkey"
            columns: ["resource_owner_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federation_resource_grants_resource_owner_organization_id_fkey"
            columns: ["resource_owner_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      files_metadata: {
        Row: {
          created_at: string
          file_name: string
          file_size_bytes: number | null
          id: string
          mime_type: string | null
          organization_id: string
          related_ticket_id: string | null
          storage_bucket: string
          storage_path: string
          tenant_id: string | null
          uploaded_by: string | null
          visibility: Database["public"]["Enums"]["content_visibility"]
        }
        Insert: {
          created_at?: string
          file_name: string
          file_size_bytes?: number | null
          id?: string
          mime_type?: string | null
          organization_id: string
          related_ticket_id?: string | null
          storage_bucket: string
          storage_path: string
          tenant_id?: string | null
          uploaded_by?: string | null
          visibility?: Database["public"]["Enums"]["content_visibility"]
        }
        Update: {
          created_at?: string
          file_name?: string
          file_size_bytes?: number | null
          id?: string
          mime_type?: string | null
          organization_id?: string
          related_ticket_id?: string | null
          storage_bucket?: string
          storage_path?: string
          tenant_id?: string | null
          uploaded_by?: string | null
          visibility?: Database["public"]["Enums"]["content_visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "files_metadata_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_metadata_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "files_metadata_related_ticket_id_fkey"
            columns: ["related_ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_metadata_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_metadata_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_metadata_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      firewalls: {
        Row: {
          created_at: string
          firewall_role: string | null
          firmware_version: string | null
          high_level_status: string
          id: string
          last_policy_review_at: string | null
          network_asset_id: string
          policy_revision: string | null
          rule_summary: Json
        }
        Insert: {
          created_at?: string
          firewall_role?: string | null
          firmware_version?: string | null
          high_level_status?: string
          id?: string
          last_policy_review_at?: string | null
          network_asset_id: string
          policy_revision?: string | null
          rule_summary?: Json
        }
        Update: {
          created_at?: string
          firewall_role?: string | null
          firmware_version?: string | null
          high_level_status?: string
          id?: string
          last_policy_review_at?: string | null
          network_asset_id?: string
          policy_revision?: string | null
          rule_summary?: Json
        }
        Relationships: [
          {
            foreignKeyName: "firewalls_network_asset_id_fkey"
            columns: ["network_asset_id"]
            isOneToOne: true
            referencedRelation: "network_assets"
            referencedColumns: ["id"]
          },
        ]
      }
      global_identity_directory: {
        Row: {
          created_at: string
          department_id: string | null
          directory_status: string
          employment_type: string | null
          first_name: string | null
          full_name: string | null
          global_person_id: string
          id: string
          identity_source: string
          intellihire_candidate_id: string | null
          job_title: string | null
          last_name: string | null
          manager_global_person_id: string | null
          organization_id: string | null
          primary_email: string | null
          primary_phone: string | null
          profile_id: string | null
          tenant_id: string | null
          updated_at: string
          workforce_person_id: string | null
        }
        Insert: {
          created_at?: string
          department_id?: string | null
          directory_status?: string
          employment_type?: string | null
          first_name?: string | null
          full_name?: string | null
          global_person_id: string
          id?: string
          identity_source?: string
          intellihire_candidate_id?: string | null
          job_title?: string | null
          last_name?: string | null
          manager_global_person_id?: string | null
          organization_id?: string | null
          primary_email?: string | null
          primary_phone?: string | null
          profile_id?: string | null
          tenant_id?: string | null
          updated_at?: string
          workforce_person_id?: string | null
        }
        Update: {
          created_at?: string
          department_id?: string | null
          directory_status?: string
          employment_type?: string | null
          first_name?: string | null
          full_name?: string | null
          global_person_id?: string
          id?: string
          identity_source?: string
          intellihire_candidate_id?: string | null
          job_title?: string | null
          last_name?: string | null
          manager_global_person_id?: string | null
          organization_id?: string | null
          primary_email?: string | null
          primary_phone?: string | null
          profile_id?: string | null
          tenant_id?: string | null
          updated_at?: string
          workforce_person_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "global_identity_directory_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_identity_directory_intellihire_candidate_id_fkey"
            columns: ["intellihire_candidate_id"]
            isOneToOne: true
            referencedRelation: "intellihire_candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_identity_directory_manager_global_person_id_fkey"
            columns: ["manager_global_person_id"]
            isOneToOne: false
            referencedRelation: "global_identity_directory"
            referencedColumns: ["global_person_id"]
          },
          {
            foreignKeyName: "global_identity_directory_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_identity_directory_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "global_identity_directory_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_identity_directory_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "global_identity_directory_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_identity_directory_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "global_identity_directory_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: true
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      governance_audit_events: {
        Row: {
          actor_profile_id: string | null
          event_details: Json
          event_type: string
          id: string
          occurred_at: string
          organization_id: string | null
          subject_id: string
          subject_type: string
          tenant_id: string | null
        }
        Insert: {
          actor_profile_id?: string | null
          event_details?: Json
          event_type: string
          id?: string
          occurred_at?: string
          organization_id?: string | null
          subject_id: string
          subject_type: string
          tenant_id?: string | null
        }
        Update: {
          actor_profile_id?: string | null
          event_details?: Json
          event_type?: string
          id?: string
          occurred_at?: string
          organization_id?: string | null
          subject_id?: string
          subject_type?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "governance_audit_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "governance_audit_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "governance_audit_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "governance_audit_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "governance_audit_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      governance_management_role_catalog: {
        Row: {
          allowed_scopes: string[]
          created_at: string
          description: string
          is_active: boolean
          requires_approval: boolean
          role_family: string
          role_key: string
          role_name: string
        }
        Insert: {
          allowed_scopes: string[]
          created_at?: string
          description: string
          is_active?: boolean
          requires_approval?: boolean
          role_family: string
          role_key: string
          role_name: string
        }
        Update: {
          allowed_scopes?: string[]
          created_at?: string
          description?: string
          is_active?: boolean
          requires_approval?: boolean
          role_family?: string
          role_key?: string
          role_name?: string
        }
        Relationships: []
      }
      governance_region_locations: {
        Row: {
          created_at: string
          created_by_profile_id: string | null
          id: string
          location_organization_id: string
          region_id: string
          tenant_id: string
        }
        Insert: {
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          location_organization_id: string
          region_id: string
          tenant_id: string
        }
        Update: {
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          location_organization_id?: string
          region_id?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "governance_region_locations_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "governance_region_locations_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "governance_region_locations_location_organization_id_fkey"
            columns: ["location_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "governance_region_locations_location_organization_id_fkey"
            columns: ["location_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "governance_region_locations_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "governance_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "governance_region_locations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      governance_regions: {
        Row: {
          country_codes: string[]
          created_at: string
          id: string
          metadata: Json
          name: string
          parent_region_id: string | null
          region_key: string
          region_type: string
          status: string
          timezone_names: string[]
          updated_at: string
        }
        Insert: {
          country_codes?: string[]
          created_at?: string
          id?: string
          metadata?: Json
          name: string
          parent_region_id?: string | null
          region_key: string
          region_type: string
          status?: string
          timezone_names?: string[]
          updated_at?: string
        }
        Update: {
          country_codes?: string[]
          created_at?: string
          id?: string
          metadata?: Json
          name?: string
          parent_region_id?: string | null
          region_key?: string
          region_type?: string
          status?: string
          timezone_names?: string[]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "governance_regions_parent_region_id_fkey"
            columns: ["parent_region_id"]
            isOneToOne: false
            referencedRelation: "governance_regions"
            referencedColumns: ["id"]
          },
        ]
      }
      group_memberships: {
        Row: {
          added_by: string | null
          created_at: string
          expires_at: string | null
          group_id: string
          profile_id: string
        }
        Insert: {
          added_by?: string | null
          created_at?: string
          expires_at?: string | null
          group_id: string
          profile_id: string
        }
        Update: {
          added_by?: string | null
          created_at?: string
          expires_at?: string | null
          group_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_memberships_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_memberships_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "group_memberships_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_memberships_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_memberships_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      groups: {
        Row: {
          created_at: string
          description: string | null
          group_key: string | null
          group_type: string
          id: string
          is_privileged: boolean
          name: string
          organization_id: string
          tenant_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          group_key?: string | null
          group_type?: string
          id?: string
          is_privileged?: boolean
          name: string
          organization_id: string
          tenant_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          group_key?: string | null
          group_type?: string
          id?: string
          is_privileged?: boolean
          name?: string
          organization_id?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "groups_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      help_buddy_behavior_rules: {
        Row: {
          created_at: string
          description: string
          enabled: boolean
          expression_key: string | null
          id: string
          metadata: Json
          name: string
          personality_keys: string[]
          requires_admin_review: boolean
          response_strategy: string
          rule_key: string
          severity_level: number
          sort_order: number
          status: string
          trigger_categories: string[]
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string
          enabled?: boolean
          expression_key?: string | null
          id?: string
          metadata?: Json
          name: string
          personality_keys?: string[]
          requires_admin_review?: boolean
          response_strategy: string
          rule_key: string
          severity_level?: number
          sort_order?: number
          status?: string
          trigger_categories?: string[]
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          enabled?: boolean
          expression_key?: string | null
          id?: string
          metadata?: Json
          name?: string
          personality_keys?: string[]
          requires_admin_review?: boolean
          response_strategy?: string
          rule_key?: string
          severity_level?: number
          sort_order?: number
          status?: string
          trigger_categories?: string[]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_behavior_rules_expression_key_fkey"
            columns: ["expression_key"]
            isOneToOne: false
            referencedRelation: "help_buddy_expression_catalog"
            referencedColumns: ["expression_key"]
          },
        ]
      }
      help_buddy_behavior_test_cases: {
        Row: {
          case_key: string
          created_at: string
          expected_expression_key: string | null
          expected_personality_keys: string[]
          expected_severity: number
          id: string
          last_result: string | null
          last_tested_at: string | null
          metadata: Json
          name: string
          sample_input: string
          status: string
          updated_at: string
        }
        Insert: {
          case_key: string
          created_at?: string
          expected_expression_key?: string | null
          expected_personality_keys?: string[]
          expected_severity?: number
          id?: string
          last_result?: string | null
          last_tested_at?: string | null
          metadata?: Json
          name: string
          sample_input: string
          status?: string
          updated_at?: string
        }
        Update: {
          case_key?: string
          created_at?: string
          expected_expression_key?: string | null
          expected_personality_keys?: string[]
          expected_severity?: number
          id?: string
          last_result?: string | null
          last_tested_at?: string | null
          metadata?: Json
          name?: string
          sample_input?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_behavior_test_cases_expected_expression_key_fkey"
            columns: ["expected_expression_key"]
            isOneToOne: false
            referencedRelation: "help_buddy_expression_catalog"
            referencedColumns: ["expression_key"]
          },
        ]
      }
      help_buddy_communication_messages: {
        Row: {
          audience: string
          base_message: string
          created_at: string
          id: string
          local_time_window: string | null
          locale: string
          message_key: string
          message_type: string
          metadata: Json
          personality_variants: Json
          status: string
          updated_at: string
          weight: number
        }
        Insert: {
          audience?: string
          base_message: string
          created_at?: string
          id?: string
          local_time_window?: string | null
          locale?: string
          message_key: string
          message_type: string
          metadata?: Json
          personality_variants?: Json
          status?: string
          updated_at?: string
          weight?: number
        }
        Update: {
          audience?: string
          base_message?: string
          created_at?: string
          id?: string
          local_time_window?: string | null
          locale?: string
          message_key?: string
          message_type?: string
          metadata?: Json
          personality_variants?: Json
          status?: string
          updated_at?: string
          weight?: number
        }
        Relationships: []
      }
      help_buddy_communication_preferences: {
        Row: {
          afternoon_greetings_enabled: boolean
          created_at: string
          end_of_day_messages_enabled: boolean
          evening_greetings_enabled: boolean
          first_time_greetings_enabled: boolean
          greeting_frequency: string
          last_greeting_at: string | null
          last_greeting_key: string | null
          locale: string
          morning_greetings_enabled: boolean
          profile_id: string
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          selected_personality_key: string
          thought_of_day_enabled: boolean
          timezone: string
          updated_at: string
          welcome_back_enabled: boolean
        }
        Insert: {
          afternoon_greetings_enabled?: boolean
          created_at?: string
          end_of_day_messages_enabled?: boolean
          evening_greetings_enabled?: boolean
          first_time_greetings_enabled?: boolean
          greeting_frequency?: string
          last_greeting_at?: string | null
          last_greeting_key?: string | null
          locale?: string
          morning_greetings_enabled?: boolean
          profile_id: string
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          selected_personality_key?: string
          thought_of_day_enabled?: boolean
          timezone?: string
          updated_at?: string
          welcome_back_enabled?: boolean
        }
        Update: {
          afternoon_greetings_enabled?: boolean
          created_at?: string
          end_of_day_messages_enabled?: boolean
          evening_greetings_enabled?: boolean
          first_time_greetings_enabled?: boolean
          greeting_frequency?: string
          last_greeting_at?: string | null
          last_greeting_key?: string | null
          locale?: string
          morning_greetings_enabled?: boolean
          profile_id?: string
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          selected_personality_key?: string
          thought_of_day_enabled?: boolean
          timezone?: string
          updated_at?: string
          welcome_back_enabled?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_communication_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_communication_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_daily_thoughts: {
        Row: {
          attribution: string | null
          category: string
          content_origin: string
          created_at: string
          id: string
          locale: string
          personality_variants: Json
          publish_on: string | null
          status: string
          thought_key: string
          thought_text: string
          updated_at: string
        }
        Insert: {
          attribution?: string | null
          category: string
          content_origin?: string
          created_at?: string
          id?: string
          locale?: string
          personality_variants?: Json
          publish_on?: string | null
          status?: string
          thought_key: string
          thought_text: string
          updated_at?: string
        }
        Update: {
          attribution?: string | null
          category?: string
          content_origin?: string
          created_at?: string
          id?: string
          locale?: string
          personality_variants?: Json
          publish_on?: string | null
          status?: string
          thought_key?: string
          thought_text?: string
          updated_at?: string
        }
        Relationships: []
      }
      help_buddy_event_rules: {
        Row: {
          action_key: string | null
          assistant_key: string
          created_at: string
          created_by: string | null
          description: string
          enabled: boolean
          event_key: string
          event_label: string
          event_type: string
          id: string
          metadata: Json
          organization_id: string | null
          requires_approval: boolean
          response_template: string
          source_system: string
          status: string
          tenant_id: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          action_key?: string | null
          assistant_key?: string
          created_at?: string
          created_by?: string | null
          description?: string
          enabled?: boolean
          event_key: string
          event_label: string
          event_type: string
          id?: string
          metadata?: Json
          organization_id?: string | null
          requires_approval?: boolean
          response_template: string
          source_system: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          action_key?: string | null
          assistant_key?: string
          created_at?: string
          created_by?: string | null
          description?: string
          enabled?: boolean
          event_key?: string
          event_label?: string
          event_type?: string
          id?: string
          metadata?: Json
          organization_id?: string | null
          requires_approval?: boolean
          response_template?: string
          source_system?: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_event_rules_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_event_rules_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_event_rules_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_event_rules_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "help_buddy_event_rules_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_event_rules_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_event_rules_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_expression_catalog: {
        Row: {
          animation_manifest: Json
          animation_storage_path: string | null
          asset_status: string
          asset_storage_path: string | null
          category_key: string
          category_name: string
          created_at: string
          description: string
          emotion_tags: string[]
          expression_key: string
          id: string
          name: string
          sort_order: number
          status: string
          thumbnail_storage_path: string | null
          updated_at: string
          version: number
          visual_spec: Json
        }
        Insert: {
          animation_manifest?: Json
          animation_storage_path?: string | null
          asset_status?: string
          asset_storage_path?: string | null
          category_key: string
          category_name: string
          created_at?: string
          description?: string
          emotion_tags?: string[]
          expression_key: string
          id?: string
          name: string
          sort_order?: number
          status?: string
          thumbnail_storage_path?: string | null
          updated_at?: string
          version?: number
          visual_spec?: Json
        }
        Update: {
          animation_manifest?: Json
          animation_storage_path?: string | null
          asset_status?: string
          asset_storage_path?: string | null
          category_key?: string
          category_name?: string
          created_at?: string
          description?: string
          emotion_tags?: string[]
          expression_key?: string
          id?: string
          name?: string
          sort_order?: number
          status?: string
          thumbnail_storage_path?: string | null
          updated_at?: string
          version?: number
          visual_spec?: Json
        }
        Relationships: []
      }
      help_buddy_feedback: {
        Row: {
          comment: string | null
          created_at: string
          feedback_type: string
          id: string
          message_id: string
          profile_id: string
          rating: number
          session_id: string
          updated_at: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          feedback_type?: string
          id?: string
          message_id: string
          profile_id: string
          rating: number
          session_id: string
          updated_at?: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          feedback_type?: string
          id?: string
          message_id?: string
          profile_id?: string
          rating?: number
          session_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_feedback_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "assistant_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_feedback_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_feedback_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_feedback_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      help_buddy_knowledge_domain_catalog: {
        Row: {
          access_scope: string
          created_at: string
          default_retrieval_enabled: boolean
          description: string
          domain_key: string
          name: string
          source_types: string[]
        }
        Insert: {
          access_scope?: string
          created_at?: string
          default_retrieval_enabled?: boolean
          description: string
          domain_key: string
          name: string
          source_types?: string[]
        }
        Update: {
          access_scope?: string
          created_at?: string
          default_retrieval_enabled?: boolean
          description?: string
          domain_key?: string
          name?: string
          source_types?: string[]
        }
        Relationships: []
      }
      help_buddy_knowledge_type_catalog: {
        Row: {
          created_at: string
          description: string
          knowledge_type_key: string
          name: string
        }
        Insert: {
          created_at?: string
          description: string
          knowledge_type_key: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string
          knowledge_type_key?: string
          name?: string
        }
        Relationships: []
      }
      help_buddy_library_categories: {
        Row: {
          category_key: string
          created_at: string
          description: string
          id: string
          name: string
          parent_category_id: string | null
          sort_order: number
          status: string
          target_patterns: number
          updated_at: string
        }
        Insert: {
          category_key: string
          created_at?: string
          description?: string
          id?: string
          name: string
          parent_category_id?: string | null
          sort_order?: number
          status?: string
          target_patterns?: number
          updated_at?: string
        }
        Update: {
          category_key?: string
          created_at?: string
          description?: string
          id?: string
          name?: string
          parent_category_id?: string | null
          sort_order?: number
          status?: string
          target_patterns?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_library_categories_parent_category_id_fkey"
            columns: ["parent_category_id"]
            isOneToOne: false
            referencedRelation: "help_buddy_library_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      help_buddy_management_audit: {
        Row: {
          actor_profile_id: string | null
          created_at: string
          entity_id: string
          entity_type: string
          id: string
          new_record: Json | null
          old_record: Json | null
          operation: string
        }
        Insert: {
          actor_profile_id?: string | null
          created_at?: string
          entity_id: string
          entity_type: string
          id?: string
          new_record?: Json | null
          old_record?: Json | null
          operation: string
        }
        Update: {
          actor_profile_id?: string | null
          created_at?: string
          entity_id?: string
          entity_type?: string
          id?: string
          new_record?: Json | null
          old_record?: Json | null
          operation?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_management_audit_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_management_audit_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_memory_events: {
        Row: {
          created_at: string
          event_detail: string | null
          event_type: string
          id: string
          memory_id: string | null
          metadata: Json
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          event_detail?: string | null
          event_type: string
          id?: string
          memory_id?: string | null
          metadata?: Json
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          event_detail?: string | null
          event_type?: string
          id?: string
          memory_id?: string | null
          metadata?: Json
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_memory_events_memory_id_fkey"
            columns: ["memory_id"]
            isOneToOne: false
            referencedRelation: "help_buddy_memory_records"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_memory_events_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_memory_events_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_memory_layer_catalog: {
        Row: {
          created_at: string
          default_enabled: boolean
          default_retention_days: number | null
          description: string
          layer_key: string
          name: string
          requires_user_approval: boolean
          retention_class: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          default_enabled?: boolean
          default_retention_days?: number | null
          description: string
          layer_key: string
          name: string
          requires_user_approval?: boolean
          retention_class: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          default_enabled?: boolean
          default_retention_days?: number | null
          description?: string
          layer_key?: string
          name?: string
          requires_user_approval?: boolean
          retention_class?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      help_buddy_memory_layer_preferences: {
        Row: {
          auto_capture: boolean
          auto_recall: boolean
          created_at: string
          enabled: boolean
          id: string
          layer_key: string
          profile_id: string
          requires_user_approval: boolean
          retention_days: number | null
          updated_at: string
        }
        Insert: {
          auto_capture?: boolean
          auto_recall?: boolean
          created_at?: string
          enabled?: boolean
          id?: string
          layer_key: string
          profile_id: string
          requires_user_approval?: boolean
          retention_days?: number | null
          updated_at?: string
        }
        Update: {
          auto_capture?: boolean
          auto_recall?: boolean
          created_at?: string
          enabled?: boolean
          id?: string
          layer_key?: string
          profile_id?: string
          requires_user_approval?: boolean
          retention_days?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_memory_layer_preferences_layer_key_fkey"
            columns: ["layer_key"]
            isOneToOne: false
            referencedRelation: "help_buddy_memory_layer_catalog"
            referencedColumns: ["layer_key"]
          },
          {
            foreignKeyName: "help_buddy_memory_layer_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_memory_layer_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_memory_records: {
        Row: {
          access_count: number
          confidence: number
          content: string
          created_at: string
          embedding: string | null
          embedding_model: string | null
          expires_at: string | null
          id: string
          importance: number
          last_accessed_at: string | null
          last_recalled_at: string | null
          linked_ticket_id: string | null
          linked_workspace: string | null
          memory_layer_key: string | null
          memory_scope: string
          memory_type: string
          metadata: Json
          organization_id: string | null
          profile_id: string | null
          retention_policy: string
          sensitivity_level: string
          source_message_id: string | null
          source_reference: Json
          source_session_id: string | null
          status: string
          tenant_id: string | null
          title: string
          updated_at: string
          user_approved: boolean
        }
        Insert: {
          access_count?: number
          confidence?: number
          content: string
          created_at?: string
          embedding?: string | null
          embedding_model?: string | null
          expires_at?: string | null
          id?: string
          importance?: number
          last_accessed_at?: string | null
          last_recalled_at?: string | null
          linked_ticket_id?: string | null
          linked_workspace?: string | null
          memory_layer_key?: string | null
          memory_scope?: string
          memory_type: string
          metadata?: Json
          organization_id?: string | null
          profile_id?: string | null
          retention_policy?: string
          sensitivity_level?: string
          source_message_id?: string | null
          source_reference?: Json
          source_session_id?: string | null
          status?: string
          tenant_id?: string | null
          title: string
          updated_at?: string
          user_approved?: boolean
        }
        Update: {
          access_count?: number
          confidence?: number
          content?: string
          created_at?: string
          embedding?: string | null
          embedding_model?: string | null
          expires_at?: string | null
          id?: string
          importance?: number
          last_accessed_at?: string | null
          last_recalled_at?: string | null
          linked_ticket_id?: string | null
          linked_workspace?: string | null
          memory_layer_key?: string | null
          memory_scope?: string
          memory_type?: string
          metadata?: Json
          organization_id?: string | null
          profile_id?: string | null
          retention_policy?: string
          sensitivity_level?: string
          source_message_id?: string | null
          source_reference?: Json
          source_session_id?: string | null
          status?: string
          tenant_id?: string | null
          title?: string
          updated_at?: string
          user_approved?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_memory_layer_fk"
            columns: ["memory_layer_key"]
            isOneToOne: false
            referencedRelation: "help_buddy_memory_layer_catalog"
            referencedColumns: ["layer_key"]
          },
          {
            foreignKeyName: "help_buddy_memory_records_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_memory_records_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "help_buddy_memory_records_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_memory_records_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_memory_records_source_message_id_fkey"
            columns: ["source_message_id"]
            isOneToOne: false
            referencedRelation: "assistant_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_memory_records_source_session_id_fkey"
            columns: ["source_session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_memory_records_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      help_buddy_personality_blends: {
        Row: {
          blend_key: string
          context_tags: string[]
          created_at: string
          description: string
          id: string
          name: string
          personality_weights: Json
          sort_order: number
          status: string
          updated_at: string
          user_selectable: boolean
        }
        Insert: {
          blend_key: string
          context_tags?: string[]
          created_at?: string
          description?: string
          id?: string
          name: string
          personality_weights?: Json
          sort_order?: number
          status?: string
          updated_at?: string
          user_selectable?: boolean
        }
        Update: {
          blend_key?: string
          context_tags?: string[]
          created_at?: string
          description?: string
          id?: string
          name?: string
          personality_weights?: Json
          sort_order?: number
          status?: string
          updated_at?: string
          user_selectable?: boolean
        }
        Relationships: []
      }
      help_buddy_personality_preferences: {
        Row: {
          created_at: string
          created_by: string | null
          enabled: boolean
          id: string
          intensity: number
          organization_id: string | null
          personality_key: string
          priority: number
          profile_id: string | null
          scope_type: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          enabled?: boolean
          id?: string
          intensity?: number
          organization_id?: string | null
          personality_key: string
          priority?: number
          profile_id?: string | null
          scope_type: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          enabled?: boolean
          id?: string
          intensity?: number
          organization_id?: string | null
          personality_key?: string
          priority?: number
          profile_id?: string | null
          scope_type?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_personality_preferences_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_personality_key_fkey"
            columns: ["personality_key"]
            isOneToOne: false
            referencedRelation: "assistant_personality_presets"
            referencedColumns: ["preset_key"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_personality_preferences_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_qa_entries: {
        Row: {
          alternate_questions: string[]
          answer_markdown: string
          approved_at: string | null
          approved_by: string | null
          assistant_key: string
          confidence_threshold: number
          created_at: string
          created_by: string | null
          embedding: string | null
          embedding_model: string | null
          id: string
          intent_key: string
          knowledge_base_id: string
          metadata: Json
          question: string
          search_document: unknown
          source_article_id: string | null
          status: string
          tags: string[]
          updated_at: string
          updated_by: string | null
          version: number
          visibility: string
        }
        Insert: {
          alternate_questions?: string[]
          answer_markdown: string
          approved_at?: string | null
          approved_by?: string | null
          assistant_key?: string
          confidence_threshold?: number
          created_at?: string
          created_by?: string | null
          embedding?: string | null
          embedding_model?: string | null
          id?: string
          intent_key?: string
          knowledge_base_id: string
          metadata?: Json
          question: string
          search_document?: unknown
          source_article_id?: string | null
          status?: string
          tags?: string[]
          updated_at?: string
          updated_by?: string | null
          version?: number
          visibility?: string
        }
        Update: {
          alternate_questions?: string[]
          answer_markdown?: string
          approved_at?: string | null
          approved_by?: string | null
          assistant_key?: string
          confidence_threshold?: number
          created_at?: string
          created_by?: string | null
          embedding?: string | null
          embedding_model?: string | null
          id?: string
          intent_key?: string
          knowledge_base_id?: string
          metadata?: Json
          question?: string
          search_document?: unknown
          source_article_id?: string | null
          status?: string
          tags?: string[]
          updated_at?: string
          updated_by?: string | null
          version?: number
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_qa_entries_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_qa_entries_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_qa_entries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_qa_entries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_qa_entries_knowledge_base_id_fkey"
            columns: ["knowledge_base_id"]
            isOneToOne: false
            referencedRelation: "knowledge_bases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_qa_entries_source_article_id_fkey"
            columns: ["source_article_id"]
            isOneToOne: true
            referencedRelation: "knowledge_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_qa_entries_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_qa_entries_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_response_templates: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          audience: string
          category_id: string
          cooldown_turns: number
          created_at: string
          created_by: string | null
          embedding: string | null
          embedding_model: string | null
          escalation_level: string | null
          follow_up_variants: Json
          id: string
          intent_key: string
          metadata: Json
          organization_id: string | null
          repeat_policy: string
          requires_permission_check: boolean
          response_variants: Json
          status: string
          tenant_id: string | null
          title: string
          tone: string
          updated_at: string
          updated_by: string | null
          user_examples: string[]
          version: number
          visibility: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          audience?: string
          category_id: string
          cooldown_turns?: number
          created_at?: string
          created_by?: string | null
          embedding?: string | null
          embedding_model?: string | null
          escalation_level?: string | null
          follow_up_variants?: Json
          id?: string
          intent_key: string
          metadata?: Json
          organization_id?: string | null
          repeat_policy?: string
          requires_permission_check?: boolean
          response_variants?: Json
          status?: string
          tenant_id?: string | null
          title: string
          tone?: string
          updated_at?: string
          updated_by?: string | null
          user_examples?: string[]
          version?: number
          visibility?: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          audience?: string
          category_id?: string
          cooldown_turns?: number
          created_at?: string
          created_by?: string | null
          embedding?: string | null
          embedding_model?: string | null
          escalation_level?: string | null
          follow_up_variants?: Json
          id?: string
          intent_key?: string
          metadata?: Json
          organization_id?: string | null
          repeat_policy?: string
          requires_permission_check?: boolean
          response_variants?: Json
          status?: string
          tenant_id?: string | null
          title?: string
          tone?: string
          updated_at?: string
          updated_by?: string | null
          user_examples?: string[]
          version?: number
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_response_templates_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "help_buddy_library_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_templates_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      help_buddy_response_usage: {
        Row: {
          id: string
          intent_key: string
          profile_id: string | null
          response_template_id: string | null
          session_id: string | null
          used_at: string
          variant_index: number
        }
        Insert: {
          id?: string
          intent_key: string
          profile_id?: string | null
          response_template_id?: string | null
          session_id?: string | null
          used_at?: string
          variant_index?: number
        }
        Update: {
          id?: string
          intent_key?: string
          profile_id?: string | null
          response_template_id?: string | null
          session_id?: string | null
          used_at?: string
          variant_index?: number
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_response_usage_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_usage_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_response_usage_response_template_id_fkey"
            columns: ["response_template_id"]
            isOneToOne: false
            referencedRelation: "help_buddy_response_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_response_usage_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      help_buddy_ticket_memory_links: {
        Row: {
          context_summary: string | null
          created_at: string
          id: string
          linked_by: string | null
          memory_id: string | null
          profile_id: string
          relationship_type: string
          ticket_id: string
        }
        Insert: {
          context_summary?: string | null
          created_at?: string
          id?: string
          linked_by?: string | null
          memory_id?: string | null
          profile_id: string
          relationship_type?: string
          ticket_id: string
        }
        Update: {
          context_summary?: string | null
          created_at?: string
          id?: string
          linked_by?: string | null
          memory_id?: string | null
          profile_id?: string
          relationship_type?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_ticket_memory_links_linked_by_fkey"
            columns: ["linked_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_ticket_memory_links_linked_by_fkey"
            columns: ["linked_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_ticket_memory_links_memory_id_fkey"
            columns: ["memory_id"]
            isOneToOne: false
            referencedRelation: "help_buddy_memory_records"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_ticket_memory_links_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_ticket_memory_links_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_ticket_memory_links_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      help_buddy_unanswered_questions: {
        Row: {
          created_at: string
          id: string
          linked_qa_entry_id: string | null
          message_id: string | null
          normalized_question: string
          organization_id: string | null
          profile_id: string
          question: string
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          session_id: string
          status: string
          tenant_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          linked_qa_entry_id?: string | null
          message_id?: string | null
          normalized_question: string
          organization_id?: string | null
          profile_id: string
          question: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          session_id: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          linked_qa_entry_id?: string | null
          message_id?: string | null
          normalized_question?: string
          organization_id?: string | null
          profile_id?: string
          question?: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          session_id?: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_buddy_unanswered_questions_linked_qa_entry_id_fkey"
            columns: ["linked_qa_entry_id"]
            isOneToOne: false
            referencedRelation: "help_buddy_qa_entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "assistant_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "assistant_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "help_buddy_unanswered_questions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      idea_ledger_entries: {
        Row: {
          content_md: string
          created_at: string
          created_by: string | null
          decision: string | null
          entry_date: string
          entry_type: string
          id: string
          implementation_status: string
          organization_id: string | null
          source_reference: string | null
          title: string
        }
        Insert: {
          content_md?: string
          created_at?: string
          created_by?: string | null
          decision?: string | null
          entry_date?: string
          entry_type?: string
          id?: string
          implementation_status?: string
          organization_id?: string | null
          source_reference?: string | null
          title: string
        }
        Update: {
          content_md?: string
          created_at?: string
          created_by?: string | null
          decision?: string | null
          entry_date?: string
          entry_type?: string
          id?: string
          implementation_status?: string
          organization_id?: string | null
          source_reference?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "idea_ledger_entries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "idea_ledger_entries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "idea_ledger_entries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "idea_ledger_entries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      integration_connection_events: {
        Row: {
          actor_profile_id: string | null
          connection_id: string
          correlation_id: string | null
          event_data: Json
          event_key: string
          id: string
          occurred_at: string
        }
        Insert: {
          actor_profile_id?: string | null
          connection_id: string
          correlation_id?: string | null
          event_data?: Json
          event_key: string
          id?: string
          occurred_at?: string
        }
        Update: {
          actor_profile_id?: string | null
          connection_id?: string
          correlation_id?: string | null
          event_data?: Json
          event_key?: string
          id?: string
          occurred_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_connection_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_connection_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "integration_connection_events_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_connections: {
        Row: {
          auth_expires_at: string | null
          capabilities: Json
          configuration_reference: string | null
          connection_status: Database["public"]["Enums"]["integration_status"]
          connector_config_version: number
          consecutive_failures: number
          created_at: string
          credential_reference: string | null
          display_name: string
          environment: string
          id: string
          last_checked_at: string | null
          last_error_summary: string | null
          last_health_status: string
          last_provider_request_id: string | null
          last_successful_sync_at: string | null
          next_health_check_at: string | null
          organization_id: string | null
          paused_reason: string | null
          provider_key: string
          tenant_id: string | null
          updated_at: string
        }
        Insert: {
          auth_expires_at?: string | null
          capabilities?: Json
          configuration_reference?: string | null
          connection_status?: Database["public"]["Enums"]["integration_status"]
          connector_config_version?: number
          consecutive_failures?: number
          created_at?: string
          credential_reference?: string | null
          display_name: string
          environment?: string
          id?: string
          last_checked_at?: string | null
          last_error_summary?: string | null
          last_health_status?: string
          last_provider_request_id?: string | null
          last_successful_sync_at?: string | null
          next_health_check_at?: string | null
          organization_id?: string | null
          paused_reason?: string | null
          provider_key: string
          tenant_id?: string | null
          updated_at?: string
        }
        Update: {
          auth_expires_at?: string | null
          capabilities?: Json
          configuration_reference?: string | null
          connection_status?: Database["public"]["Enums"]["integration_status"]
          connector_config_version?: number
          consecutive_failures?: number
          created_at?: string
          credential_reference?: string | null
          display_name?: string
          environment?: string
          id?: string
          last_checked_at?: string | null
          last_error_summary?: string | null
          last_health_status?: string
          last_provider_request_id?: string | null
          last_successful_sync_at?: string | null
          next_health_check_at?: string | null
          organization_id?: string | null
          paused_reason?: string | null
          provider_key?: string
          tenant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_connections_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_connections_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "integration_connections_provider_catalog_fk"
            columns: ["provider_key"]
            isOneToOne: false
            referencedRelation: "integration_provider_catalog"
            referencedColumns: ["provider_key"]
          },
          {
            foreignKeyName: "integration_connections_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_delivery_attempts: {
        Row: {
          attempt_number: number
          attempted_at: string
          connection_id: string
          correlation_id: string | null
          error_code: string | null
          id: string
          operation_reference: string
          operation_type: string
          outcome: string
          provider_http_status: number | null
          retry_after: string | null
          sanitized_error: string | null
        }
        Insert: {
          attempt_number: number
          attempted_at?: string
          connection_id: string
          correlation_id?: string | null
          error_code?: string | null
          id?: string
          operation_reference: string
          operation_type: string
          outcome: string
          provider_http_status?: number | null
          retry_after?: string | null
          sanitized_error?: string | null
        }
        Update: {
          attempt_number?: number
          attempted_at?: string
          connection_id?: string
          correlation_id?: string | null
          error_code?: string | null
          id?: string
          operation_reference?: string
          operation_type?: string
          outcome?: string
          provider_http_status?: number | null
          retry_after?: string | null
          sanitized_error?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_delivery_attempts_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_health_checks: {
        Row: {
          check_type: string
          checked_at: string
          connection_id: string
          error_code: string | null
          health_status: string
          id: string
          latency_ms: number | null
          metadata: Json
          provider_http_status: number | null
          provider_request_id: string | null
          sanitized_error: string | null
        }
        Insert: {
          check_type: string
          checked_at?: string
          connection_id: string
          error_code?: string | null
          health_status: string
          id?: string
          latency_ms?: number | null
          metadata?: Json
          provider_http_status?: number | null
          provider_request_id?: string | null
          sanitized_error?: string | null
        }
        Update: {
          check_type?: string
          checked_at?: string
          connection_id?: string
          error_code?: string | null
          health_status?: string
          id?: string
          latency_ms?: number | null
          metadata?: Json
          provider_http_status?: number | null
          provider_request_id?: string | null
          sanitized_error?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_health_checks_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_provider_catalog: {
        Row: {
          auth_methods: string[]
          business_functions: string[]
          capabilities: Json
          catalog_status: string
          category: string
          created_at: string
          description: string
          display_order: number
          documentation_url: string | null
          health_check_interval_seconds: number
          integration_role: string
          is_featured: boolean
          metadata: Json
          owner_team: string
          product_surfaces: string[]
          provider_key: string
          provider_name: string
          publisher: string
          readiness_stage: string
          required_scopes: string[]
          reviewed_at: string | null
          search_aliases: string[]
          security_tier: string
          supported_sync_modes: string[]
          supports_incremental_sync: boolean
          supports_webhooks: boolean
          updated_at: string
        }
        Insert: {
          auth_methods?: string[]
          business_functions?: string[]
          capabilities?: Json
          catalog_status?: string
          category: string
          created_at?: string
          description: string
          display_order?: number
          documentation_url?: string | null
          health_check_interval_seconds?: number
          integration_role?: string
          is_featured?: boolean
          metadata?: Json
          owner_team?: string
          product_surfaces?: string[]
          provider_key: string
          provider_name: string
          publisher: string
          readiness_stage?: string
          required_scopes?: string[]
          reviewed_at?: string | null
          search_aliases?: string[]
          security_tier?: string
          supported_sync_modes?: string[]
          supports_incremental_sync?: boolean
          supports_webhooks?: boolean
          updated_at?: string
        }
        Update: {
          auth_methods?: string[]
          business_functions?: string[]
          capabilities?: Json
          catalog_status?: string
          category?: string
          created_at?: string
          description?: string
          display_order?: number
          documentation_url?: string | null
          health_check_interval_seconds?: number
          integration_role?: string
          is_featured?: boolean
          metadata?: Json
          owner_team?: string
          product_surfaces?: string[]
          provider_key?: string
          provider_name?: string
          publisher?: string
          readiness_stage?: string
          required_scopes?: string[]
          reviewed_at?: string | null
          search_aliases?: string[]
          security_tier?: string
          supported_sync_modes?: string[]
          supports_incremental_sync?: boolean
          supports_webhooks?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      integration_sync_runs: {
        Row: {
          attempt_count: number
          completed_at: string | null
          connection_id: string
          correlation_id: string | null
          created_at: string
          cursor_reference: string | null
          error_code: string | null
          id: string
          next_attempt_at: string | null
          records_created: number
          records_failed: number
          records_read: number
          records_skipped: number
          records_updated: number
          requested_by: string | null
          sanitized_error: string | null
          started_at: string | null
          sync_status: string
          sync_type: string
        }
        Insert: {
          attempt_count?: number
          completed_at?: string | null
          connection_id: string
          correlation_id?: string | null
          created_at?: string
          cursor_reference?: string | null
          error_code?: string | null
          id?: string
          next_attempt_at?: string | null
          records_created?: number
          records_failed?: number
          records_read?: number
          records_skipped?: number
          records_updated?: number
          requested_by?: string | null
          sanitized_error?: string | null
          started_at?: string | null
          sync_status?: string
          sync_type: string
        }
        Update: {
          attempt_count?: number
          completed_at?: string | null
          connection_id?: string
          correlation_id?: string | null
          created_at?: string
          cursor_reference?: string | null
          error_code?: string | null
          id?: string
          next_attempt_at?: string | null
          records_created?: number
          records_failed?: number
          records_read?: number
          records_skipped?: number
          records_updated?: number
          requested_by?: string | null
          sanitized_error?: string | null
          started_at?: string | null
          sync_status?: string
          sync_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_sync_runs_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_sync_runs_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_sync_runs_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      integration_webhook_inbox: {
        Row: {
          attempt_count: number
          connection_id: string
          correlation_id: string | null
          encrypted_payload_reference: string | null
          event_type: string
          id: string
          last_error_code: string | null
          next_attempt_at: string | null
          payload_sha256: string
          processed_at: string | null
          processing_status: string
          provider_event_id: string
          received_at: string
          safe_metadata: Json
          signature_verified: boolean
        }
        Insert: {
          attempt_count?: number
          connection_id: string
          correlation_id?: string | null
          encrypted_payload_reference?: string | null
          event_type: string
          id?: string
          last_error_code?: string | null
          next_attempt_at?: string | null
          payload_sha256: string
          processed_at?: string | null
          processing_status?: string
          provider_event_id: string
          received_at?: string
          safe_metadata?: Json
          signature_verified?: boolean
        }
        Update: {
          attempt_count?: number
          connection_id?: string
          correlation_id?: string | null
          encrypted_payload_reference?: string | null
          event_type?: string
          id?: string
          last_error_code?: string | null
          next_attempt_at?: string | null
          payload_sha256?: string
          processed_at?: string | null
          processing_status?: string
          provider_event_id?: string
          received_at?: string
          safe_metadata?: Json
          signature_verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "integration_webhook_inbox_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      intellihire_applications: {
        Row: {
          application_number: string
          application_status: string
          applied_at: string
          candidate_id: string
          created_at: string
          fit_score: number | null
          hired_workforce_person_id: string | null
          history_batch_id: string | null
          id: string
          last_activity_at: string
          metadata: Json
          notes: string | null
          organization_id: string
          recruiter_person_id: string | null
          requisition_id: string
          stage: string
        }
        Insert: {
          application_number: string
          application_status: string
          applied_at: string
          candidate_id: string
          created_at?: string
          fit_score?: number | null
          hired_workforce_person_id?: string | null
          history_batch_id?: string | null
          id?: string
          last_activity_at: string
          metadata?: Json
          notes?: string | null
          organization_id: string
          recruiter_person_id?: string | null
          requisition_id: string
          stage: string
        }
        Update: {
          application_number?: string
          application_status?: string
          applied_at?: string
          candidate_id?: string
          created_at?: string
          fit_score?: number | null
          hired_workforce_person_id?: string | null
          history_batch_id?: string | null
          id?: string
          last_activity_at?: string
          metadata?: Json
          notes?: string | null
          organization_id?: string
          recruiter_person_id?: string | null
          requisition_id?: string
          stage?: string
        }
        Relationships: [
          {
            foreignKeyName: "intellihire_applications_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "intellihire_candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_applications_hired_workforce_person_id_fkey"
            columns: ["hired_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "intellihire_applications_hired_workforce_person_id_fkey"
            columns: ["hired_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_applications_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_applications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_applications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "intellihire_applications_recruiter_person_id_fkey"
            columns: ["recruiter_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "intellihire_applications_recruiter_person_id_fkey"
            columns: ["recruiter_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_applications_requisition_id_fkey"
            columns: ["requisition_id"]
            isOneToOne: false
            referencedRelation: "intellihire_requisitions"
            referencedColumns: ["id"]
          },
        ]
      }
      intellihire_candidates: {
        Row: {
          candidate_number: string
          candidate_source: string
          candidate_status: string
          created_at: string
          email: string
          first_name: string
          headline: string | null
          hired_workforce_person_id: string | null
          history_batch_id: string | null
          home_city: string | null
          home_region: string | null
          id: string
          last_name: string
          organization_id: string
          phone: string | null
          readable_candidate_id: string | null
          skills: Json
          summary: string | null
          updated_at: string
          years_experience: number
        }
        Insert: {
          candidate_number: string
          candidate_source: string
          candidate_status: string
          created_at?: string
          email: string
          first_name: string
          headline?: string | null
          hired_workforce_person_id?: string | null
          history_batch_id?: string | null
          home_city?: string | null
          home_region?: string | null
          id?: string
          last_name: string
          organization_id: string
          phone?: string | null
          readable_candidate_id?: string | null
          skills?: Json
          summary?: string | null
          updated_at?: string
          years_experience?: number
        }
        Update: {
          candidate_number?: string
          candidate_source?: string
          candidate_status?: string
          created_at?: string
          email?: string
          first_name?: string
          headline?: string | null
          hired_workforce_person_id?: string | null
          history_batch_id?: string | null
          home_city?: string | null
          home_region?: string | null
          id?: string
          last_name?: string
          organization_id?: string
          phone?: string | null
          readable_candidate_id?: string | null
          skills?: Json
          summary?: string | null
          updated_at?: string
          years_experience?: number
        }
        Relationships: [
          {
            foreignKeyName: "intellihire_candidates_hired_workforce_person_id_fkey"
            columns: ["hired_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "intellihire_candidates_hired_workforce_person_id_fkey"
            columns: ["hired_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_candidates_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_candidates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_candidates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      intellihire_interviews: {
        Row: {
          application_id: string
          created_at: string
          feedback: string | null
          history_batch_id: string | null
          id: string
          interview_number: string
          interview_type: string
          interviewer_person_id: string | null
          organization_id: string
          outcome: string
          scheduled_at: string
        }
        Insert: {
          application_id: string
          created_at?: string
          feedback?: string | null
          history_batch_id?: string | null
          id?: string
          interview_number: string
          interview_type: string
          interviewer_person_id?: string | null
          organization_id: string
          outcome: string
          scheduled_at: string
        }
        Update: {
          application_id?: string
          created_at?: string
          feedback?: string | null
          history_batch_id?: string | null
          id?: string
          interview_number?: string
          interview_type?: string
          interviewer_person_id?: string | null
          organization_id?: string
          outcome?: string
          scheduled_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "intellihire_interviews_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "intellihire_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_interviews_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_interviews_interviewer_person_id_fkey"
            columns: ["interviewer_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "intellihire_interviews_interviewer_person_id_fkey"
            columns: ["interviewer_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_interviews_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_interviews_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      intellihire_requisitions: {
        Row: {
          closed_at: string | null
          created_at: string
          currency: string
          department_id: string | null
          employment_type: string
          headcount: number
          hiring_manager_person_id: string | null
          history_batch_id: string | null
          id: string
          job_description: string
          location_city: string | null
          location_region: string | null
          metadata: Json
          opened_at: string
          organization_id: string
          requisition_number: string
          requisition_status: string
          salary_max: number | null
          salary_min: number | null
          title: string
        }
        Insert: {
          closed_at?: string | null
          created_at?: string
          currency?: string
          department_id?: string | null
          employment_type: string
          headcount?: number
          hiring_manager_person_id?: string | null
          history_batch_id?: string | null
          id?: string
          job_description: string
          location_city?: string | null
          location_region?: string | null
          metadata?: Json
          opened_at: string
          organization_id: string
          requisition_number: string
          requisition_status: string
          salary_max?: number | null
          salary_min?: number | null
          title: string
        }
        Update: {
          closed_at?: string | null
          created_at?: string
          currency?: string
          department_id?: string | null
          employment_type?: string
          headcount?: number
          hiring_manager_person_id?: string | null
          history_batch_id?: string | null
          id?: string
          job_description?: string
          location_city?: string | null
          location_region?: string | null
          metadata?: Json
          opened_at?: string
          organization_id?: string
          requisition_number?: string
          requisition_status?: string
          salary_max?: number | null
          salary_min?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "intellihire_requisitions_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_requisitions_hiring_manager_person_id_fkey"
            columns: ["hiring_manager_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "intellihire_requisitions_hiring_manager_person_id_fkey"
            columns: ["hiring_manager_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_requisitions_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_requisitions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellihire_requisitions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      intellisphere_apps: {
        Row: {
          app_key: string
          capabilities: Json
          category: string | null
          created_at: string
          description: string | null
          id: string
          launch_path: string | null
          name: string
          status: string
        }
        Insert: {
          app_key: string
          capabilities?: Json
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          launch_path?: string | null
          name: string
          status?: string
        }
        Update: {
          app_key?: string
          capabilities?: Json
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          launch_path?: string | null
          name?: string
          status?: string
        }
        Relationships: []
      }
      intellisphere_chat_channels: {
        Row: {
          archived_at: string | null
          channel_type: string
          created_at: string
          created_by_profile_id: string
          description: string
          id: string
          name: string
          organization_id: string
          tenant_id: string | null
          updated_at: string
        }
        Insert: {
          archived_at?: string | null
          channel_type?: string
          created_at?: string
          created_by_profile_id: string
          description?: string
          id?: string
          name: string
          organization_id: string
          tenant_id?: string | null
          updated_at?: string
        }
        Update: {
          archived_at?: string | null
          channel_type?: string
          created_at?: string
          created_by_profile_id?: string
          description?: string
          id?: string
          name?: string
          organization_id?: string
          tenant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "intellisphere_chat_channels_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_channels_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "intellisphere_chat_channels_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_channels_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "intellisphere_chat_channels_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      intellisphere_chat_members: {
        Row: {
          channel_id: string
          joined_at: string
          left_at: string | null
          profile_id: string
        }
        Insert: {
          channel_id: string
          joined_at?: string
          left_at?: string | null
          profile_id: string
        }
        Update: {
          channel_id?: string
          joined_at?: string
          left_at?: string | null
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "intellisphere_chat_members_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "intellisphere_chat_channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_members_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_members_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      intellisphere_chat_messages: {
        Row: {
          body: string
          channel_id: string
          created_at: string
          deleted_at: string | null
          edited_at: string | null
          id: string
          message_type: string
          organization_id: string
          reply_to_message_id: string | null
          sender_profile_id: string
          tenant_id: string | null
        }
        Insert: {
          body: string
          channel_id: string
          created_at?: string
          deleted_at?: string | null
          edited_at?: string | null
          id?: string
          message_type?: string
          organization_id: string
          reply_to_message_id?: string | null
          sender_profile_id: string
          tenant_id?: string | null
        }
        Update: {
          body?: string
          channel_id?: string
          created_at?: string
          deleted_at?: string | null
          edited_at?: string | null
          id?: string
          message_type?: string
          organization_id?: string
          reply_to_message_id?: string | null
          sender_profile_id?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "intellisphere_chat_messages_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "intellisphere_chat_channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "intellisphere_chat_messages_reply_to_message_id_fkey"
            columns: ["reply_to_message_id"]
            isOneToOne: false
            referencedRelation: "intellisphere_chat_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_messages_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_chat_messages_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "intellisphere_chat_messages_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      intellisphere_documents: {
        Row: {
          content_markdown: string
          created_at: string
          deleted_at: string | null
          document_type: string
          id: string
          metadata: Json
          organization_id: string
          owner_profile_id: string
          tenant_id: string | null
          title: string
          updated_at: string
          version: number
        }
        Insert: {
          content_markdown?: string
          created_at?: string
          deleted_at?: string | null
          document_type?: string
          id?: string
          metadata?: Json
          organization_id: string
          owner_profile_id: string
          tenant_id?: string | null
          title?: string
          updated_at?: string
          version?: number
        }
        Update: {
          content_markdown?: string
          created_at?: string
          deleted_at?: string | null
          document_type?: string
          id?: string
          metadata?: Json
          organization_id?: string
          owner_profile_id?: string
          tenant_id?: string | null
          title?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "intellisphere_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "intellisphere_documents_owner_profile_id_fkey"
            columns: ["owner_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "intellisphere_documents_owner_profile_id_fkey"
            columns: ["owner_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "intellisphere_documents_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      investigation_findings: {
        Row: {
          confidence: string | null
          created_at: string
          created_by: string | null
          evidence_references: Json
          finding_body: string
          id: string
          investigation_id: string
          title: string
        }
        Insert: {
          confidence?: string | null
          created_at?: string
          created_by?: string | null
          evidence_references?: Json
          finding_body: string
          id?: string
          investigation_id: string
          title: string
        }
        Update: {
          confidence?: string | null
          created_at?: string
          created_by?: string | null
          evidence_references?: Json
          finding_body?: string
          id?: string
          investigation_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "investigation_findings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investigation_findings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "investigation_findings_investigation_id_fkey"
            columns: ["investigation_id"]
            isOneToOne: false
            referencedRelation: "investigations"
            referencedColumns: ["id"]
          },
        ]
      }
      investigations: {
        Row: {
          case_number: number
          closed_at: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          lead_profile_id: string | null
          organization_id: string
          sensitivity: string
          status: string
          tenant_id: string | null
          title: string
        }
        Insert: {
          case_number?: never
          closed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          lead_profile_id?: string | null
          organization_id: string
          sensitivity?: string
          status?: string
          tenant_id?: string | null
          title: string
        }
        Update: {
          case_number?: never
          closed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          lead_profile_id?: string | null
          organization_id?: string
          sensitivity?: string
          status?: string
          tenant_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "investigations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investigations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "investigations_lead_profile_id_fkey"
            columns: ["lead_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investigations_lead_profile_id_fkey"
            columns: ["lead_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "investigations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "investigations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "investigations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      job_alert_preferences: {
        Row: {
          candidate_profile_id: string
          city: string | null
          created_at: string
          daily_max: number
          daily_min: number
          delivery_channels: string[]
          delivery_times: string[]
          enabled: boolean
          id: string
          job_types: string[]
          last_sent_at: string | null
          minimum_pay: number | null
          pay_period: string
          postal_code: string | null
          radius_miles: number
          region: string | null
          required_skill_ids: string[]
          timezone: string
          updated_at: string
        }
        Insert: {
          candidate_profile_id: string
          city?: string | null
          created_at?: string
          daily_max?: number
          daily_min?: number
          delivery_channels?: string[]
          delivery_times?: string[]
          enabled?: boolean
          id?: string
          job_types?: string[]
          last_sent_at?: string | null
          minimum_pay?: number | null
          pay_period?: string
          postal_code?: string | null
          radius_miles?: number
          region?: string | null
          required_skill_ids?: string[]
          timezone?: string
          updated_at?: string
        }
        Update: {
          candidate_profile_id?: string
          city?: string | null
          created_at?: string
          daily_max?: number
          daily_min?: number
          delivery_channels?: string[]
          delivery_times?: string[]
          enabled?: boolean
          id?: string
          job_types?: string[]
          last_sent_at?: string | null
          minimum_pay?: number | null
          pay_period?: string
          postal_code?: string | null
          radius_miles?: number
          region?: string | null
          required_skill_ids?: string[]
          timezone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_alert_preferences_candidate_profile_id_fkey"
            columns: ["candidate_profile_id"]
            isOneToOne: true
            referencedRelation: "candidate_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          candidate_profile_id: string
          cover_note: string | null
          employer_notes: string | null
          id: string
          job_posting_id: string
          proposed_pay: number | null
          status: string
          submitted_at: string
          updated_at: string
        }
        Insert: {
          candidate_profile_id: string
          cover_note?: string | null
          employer_notes?: string | null
          id?: string
          job_posting_id: string
          proposed_pay?: number | null
          status?: string
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          candidate_profile_id?: string
          cover_note?: string | null
          employer_notes?: string | null
          id?: string
          job_posting_id?: string
          proposed_pay?: number | null
          status?: string
          submitted_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_candidate_profile_id_fkey"
            columns: ["candidate_profile_id"]
            isOneToOne: false
            referencedRelation: "candidate_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_applications_job_posting_id_fkey"
            columns: ["job_posting_id"]
            isOneToOne: false
            referencedRelation: "job_postings"
            referencedColumns: ["id"]
          },
        ]
      }
      job_matches: {
        Row: {
          availability_score: number
          calculated_at: string
          candidate_profile_id: string
          explanation: Json
          id: string
          job_posting_id: string
          match_score: number
          match_status: string
          pay_score: number
          skill_score: number
          travel_score: number
        }
        Insert: {
          availability_score?: number
          calculated_at?: string
          candidate_profile_id: string
          explanation?: Json
          id?: string
          job_posting_id: string
          match_score?: number
          match_status?: string
          pay_score?: number
          skill_score?: number
          travel_score?: number
        }
        Update: {
          availability_score?: number
          calculated_at?: string
          candidate_profile_id?: string
          explanation?: Json
          id?: string
          job_posting_id?: string
          match_score?: number
          match_status?: string
          pay_score?: number
          skill_score?: number
          travel_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "job_matches_candidate_profile_id_fkey"
            columns: ["candidate_profile_id"]
            isOneToOne: false
            referencedRelation: "candidate_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_matches_job_posting_id_fkey"
            columns: ["job_posting_id"]
            isOneToOne: false
            referencedRelation: "job_postings"
            referencedColumns: ["id"]
          },
        ]
      }
      job_postings: {
        Row: {
          address_line: string | null
          application_instructions: string | null
          benefits: Json
          category: string | null
          city: string
          closes_at: string | null
          commute_radius_miles: number | null
          company_id: string
          country_code: string
          created_at: string
          created_by: string | null
          description: string
          end_date: string | null
          id: string
          job_type: string
          latitude: number | null
          longitude: number | null
          minimum_experience_years: number | null
          openings: number
          pay_currency: string
          pay_max: number | null
          pay_min: number | null
          pay_period: string
          postal_code: string | null
          preferred_skills: Json
          published_at: string | null
          region: string
          required_skills: Json
          shift_end: string | null
          shift_start: string | null
          start_date: string | null
          status: string
          tenant_id: string | null
          title: string
          travel_reimbursement: string | null
          updated_at: string
          urgent: boolean
          work_mode: string
        }
        Insert: {
          address_line?: string | null
          application_instructions?: string | null
          benefits?: Json
          category?: string | null
          city: string
          closes_at?: string | null
          commute_radius_miles?: number | null
          company_id: string
          country_code?: string
          created_at?: string
          created_by?: string | null
          description: string
          end_date?: string | null
          id?: string
          job_type?: string
          latitude?: number | null
          longitude?: number | null
          minimum_experience_years?: number | null
          openings?: number
          pay_currency?: string
          pay_max?: number | null
          pay_min?: number | null
          pay_period?: string
          postal_code?: string | null
          preferred_skills?: Json
          published_at?: string | null
          region: string
          required_skills?: Json
          shift_end?: string | null
          shift_start?: string | null
          start_date?: string | null
          status?: string
          tenant_id?: string | null
          title: string
          travel_reimbursement?: string | null
          updated_at?: string
          urgent?: boolean
          work_mode?: string
        }
        Update: {
          address_line?: string | null
          application_instructions?: string | null
          benefits?: Json
          category?: string | null
          city?: string
          closes_at?: string | null
          commute_radius_miles?: number | null
          company_id?: string
          country_code?: string
          created_at?: string
          created_by?: string | null
          description?: string
          end_date?: string | null
          id?: string
          job_type?: string
          latitude?: number | null
          longitude?: number | null
          minimum_experience_years?: number | null
          openings?: number
          pay_currency?: string
          pay_max?: number | null
          pay_min?: number | null
          pay_period?: string
          postal_code?: string | null
          preferred_skills?: Json
          published_at?: string | null
          region?: string
          required_skills?: Json
          shift_end?: string | null
          shift_start?: string | null
          start_date?: string | null
          status?: string
          tenant_id?: string | null
          title?: string
          travel_reimbursement?: string | null
          updated_at?: string
          urgent?: boolean
          work_mode?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_postings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "marketplace_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_postings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "job_postings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_financial_period_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "job_postings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "job_postings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "job_postings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "job_postings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_postings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "job_postings_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      knowledge_articles: {
        Row: {
          body_md: string
          created_at: string
          created_by: string | null
          embedding: string | null
          embedding_model: string | null
          id: string
          knowledge_base_id: string
          metadata: Json
          published_at: string | null
          slug: string | null
          status: string
          summary: string | null
          title: string
          updated_at: string
          updated_by: string | null
          visibility: Database["public"]["Enums"]["content_visibility"]
        }
        Insert: {
          body_md?: string
          created_at?: string
          created_by?: string | null
          embedding?: string | null
          embedding_model?: string | null
          id?: string
          knowledge_base_id: string
          metadata?: Json
          published_at?: string | null
          slug?: string | null
          status?: string
          summary?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
          visibility?: Database["public"]["Enums"]["content_visibility"]
        }
        Update: {
          body_md?: string
          created_at?: string
          created_by?: string | null
          embedding?: string | null
          embedding_model?: string | null
          id?: string
          knowledge_base_id?: string
          metadata?: Json
          published_at?: string | null
          slug?: string | null
          status?: string
          summary?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
          visibility?: Database["public"]["Enums"]["content_visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_articles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "knowledge_articles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "knowledge_articles_knowledge_base_id_fkey"
            columns: ["knowledge_base_id"]
            isOneToOne: false
            referencedRelation: "knowledge_bases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "knowledge_articles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "knowledge_articles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      knowledge_bases: {
        Row: {
          assistant_id: string | null
          created_at: string
          department_id: string | null
          description: string | null
          id: string
          kb_key: string
          name: string
          organization_id: string | null
          status: string
          visibility: Database["public"]["Enums"]["content_visibility"]
        }
        Insert: {
          assistant_id?: string | null
          created_at?: string
          department_id?: string | null
          description?: string | null
          id?: string
          kb_key: string
          name: string
          organization_id?: string | null
          status?: string
          visibility?: Database["public"]["Enums"]["content_visibility"]
        }
        Update: {
          assistant_id?: string | null
          created_at?: string
          department_id?: string | null
          description?: string | null
          id?: string
          kb_key?: string
          name?: string
          organization_id?: string | null
          status?: string
          visibility?: Database["public"]["Enums"]["content_visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_bases_assistant_id_fkey"
            columns: ["assistant_id"]
            isOneToOne: false
            referencedRelation: "assistants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "knowledge_bases_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "knowledge_bases_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "knowledge_bases_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      license_skus: {
        Row: {
          created_at: string
          display_name: string
          id: string
          is_current: boolean
          is_simulated_catalog: boolean
          license_tier: string | null
          notes: string | null
          product_family: string
          sku_key: string
          vendor: string
        }
        Insert: {
          created_at?: string
          display_name: string
          id?: string
          is_current?: boolean
          is_simulated_catalog?: boolean
          license_tier?: string | null
          notes?: string | null
          product_family: string
          sku_key: string
          vendor: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          is_current?: boolean
          is_simulated_catalog?: boolean
          license_tier?: string | null
          notes?: string | null
          product_family?: string
          sku_key?: string
          vendor?: string
        }
        Relationships: []
      }
      marketplace_audit_events: {
        Row: {
          actor_user_id: string | null
          created_at: string
          details: Json
          event_key: string
          id: string
          organization_id: string | null
          resource_id: string | null
          resource_type: string
          result: string
          tenant_id: string | null
        }
        Insert: {
          actor_user_id?: string | null
          created_at?: string
          details?: Json
          event_key: string
          id?: string
          organization_id?: string | null
          resource_id?: string | null
          resource_type: string
          result?: string
          tenant_id?: string | null
        }
        Update: {
          actor_user_id?: string | null
          created_at?: string
          details?: Json
          event_key?: string
          id?: string
          organization_id?: string | null
          resource_id?: string | null
          resource_type?: string
          result?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_audit_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_audit_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_audit_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_cart_items: {
        Row: {
          cart_id: string
          configuration: Json
          created_at: string
          id: string
          price_snapshot: Json
          product_id: string
          quantity: number
          selected_addons: Json
          updated_at: string
        }
        Insert: {
          cart_id: string
          configuration?: Json
          created_at?: string
          id?: string
          price_snapshot?: Json
          product_id: string
          quantity?: number
          selected_addons?: Json
          updated_at?: string
        }
        Update: {
          cart_id?: string
          configuration?: Json
          created_at?: string
          id?: string
          price_snapshot?: Json
          product_id?: string
          quantity?: number
          selected_addons?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_cart_items_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "marketplace_carts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "marketplace_products"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_carts: {
        Row: {
          created_at: string
          currency: string
          expires_at: string | null
          id: string
          last_pricing_snapshot: Json
          organization_id: string | null
          package_key: string | null
          promotion_code: string | null
          status: string
          tenant_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          currency?: string
          expires_at?: string | null
          id?: string
          last_pricing_snapshot?: Json
          organization_id?: string | null
          package_key?: string | null
          promotion_code?: string | null
          status?: string
          tenant_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          currency?: string
          expires_at?: string | null
          id?: string
          last_pricing_snapshot?: Json
          organization_id?: string | null
          package_key?: string | null
          promotion_code?: string | null
          status?: string
          tenant_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_carts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_carts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_carts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_categories: {
        Row: {
          category_key: string
          created_at: string
          description: string
          icon_key: string | null
          id: string
          is_active: boolean
          name: string
          sort_order: number
          theme_key: string | null
          updated_at: string
        }
        Insert: {
          category_key: string
          created_at?: string
          description?: string
          icon_key?: string | null
          id?: string
          is_active?: boolean
          name: string
          sort_order?: number
          theme_key?: string | null
          updated_at?: string
        }
        Update: {
          category_key?: string
          created_at?: string
          description?: string
          icon_key?: string | null
          id?: string
          is_active?: boolean
          name?: string
          sort_order?: number
          theme_key?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      marketplace_companies: {
        Row: {
          company_size: string | null
          company_type: string
          created_at: string
          description: string | null
          display_name: string
          headquarters_city: string | null
          headquarters_postal_code: string | null
          headquarters_region: string | null
          hiring_contact_email: string | null
          id: string
          industry: string | null
          legal_name: string
          organization_id: string | null
          owner_profile_id: string | null
          readable_employer_id: string | null
          settings: Json
          tenant_id: string | null
          updated_at: string
          verification_status: string
          website_url: string | null
        }
        Insert: {
          company_size?: string | null
          company_type?: string
          created_at?: string
          description?: string | null
          display_name: string
          headquarters_city?: string | null
          headquarters_postal_code?: string | null
          headquarters_region?: string | null
          hiring_contact_email?: string | null
          id?: string
          industry?: string | null
          legal_name: string
          organization_id?: string | null
          owner_profile_id?: string | null
          readable_employer_id?: string | null
          settings?: Json
          tenant_id?: string | null
          updated_at?: string
          verification_status?: string
          website_url?: string | null
        }
        Update: {
          company_size?: string | null
          company_type?: string
          created_at?: string
          description?: string | null
          display_name?: string
          headquarters_city?: string | null
          headquarters_postal_code?: string | null
          headquarters_region?: string | null
          hiring_contact_email?: string | null
          id?: string
          industry?: string | null
          legal_name?: string
          organization_id?: string | null
          owner_profile_id?: string | null
          readable_employer_id?: string | null
          settings?: Json
          tenant_id?: string | null
          updated_at?: string
          verification_status?: string
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_companies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_companies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_companies_owner_profile_id_fkey"
            columns: ["owner_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_companies_owner_profile_id_fkey"
            columns: ["owner_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "marketplace_companies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_comparison_benchmarks: {
        Row: {
          benchmark_key: string
          capability_keys: string[]
          category_key: string
          company_size_max: number | null
          company_size_min: number | null
          created_at: string
          created_by: string | null
          currency: string
          id: string
          industry_keys: string[]
          is_active: boolean
          label: string
          monthly_cost: number
          source_label: string
          source_notes: string
          source_url: string | null
          system_name: string | null
          updated_at: string
          vendor_name: string | null
          verified_at: string | null
        }
        Insert: {
          benchmark_key: string
          capability_keys?: string[]
          category_key: string
          company_size_max?: number | null
          company_size_min?: number | null
          created_at?: string
          created_by?: string | null
          currency?: string
          id?: string
          industry_keys?: string[]
          is_active?: boolean
          label: string
          monthly_cost: number
          source_label?: string
          source_notes?: string
          source_url?: string | null
          system_name?: string | null
          updated_at?: string
          vendor_name?: string | null
          verified_at?: string | null
        }
        Update: {
          benchmark_key?: string
          capability_keys?: string[]
          category_key?: string
          company_size_max?: number | null
          company_size_min?: number | null
          created_at?: string
          created_by?: string | null
          currency?: string
          id?: string
          industry_keys?: string[]
          is_active?: boolean
          label?: string
          monthly_cost?: number
          source_label?: string
          source_notes?: string
          source_url?: string | null
          system_name?: string | null
          updated_at?: string
          vendor_name?: string | null
          verified_at?: string | null
        }
        Relationships: []
      }
      marketplace_customer_accounts: {
        Row: {
          account_manager_person_id: string | null
          account_number: string
          account_status: string
          company_size: string | null
          created_at: string
          customer_company_id: string
          customer_since: string
          history_batch_id: string | null
          id: string
          industry: string | null
          metadata: Json
          organization_id: string
          source_channel: string
          updated_at: string
        }
        Insert: {
          account_manager_person_id?: string | null
          account_number: string
          account_status?: string
          company_size?: string | null
          created_at?: string
          customer_company_id: string
          customer_since: string
          history_batch_id?: string | null
          id?: string
          industry?: string | null
          metadata?: Json
          organization_id: string
          source_channel?: string
          updated_at?: string
        }
        Update: {
          account_manager_person_id?: string | null
          account_number?: string
          account_status?: string
          company_size?: string | null
          created_at?: string
          customer_company_id?: string
          customer_since?: string
          history_batch_id?: string | null
          id?: string
          industry?: string | null
          metadata?: Json
          organization_id?: string
          source_channel?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_customer_accounts_account_manager_person_id_fkey"
            columns: ["account_manager_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_account_manager_person_id_fkey"
            columns: ["account_manager_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_customer_company_id_fkey"
            columns: ["customer_company_id"]
            isOneToOne: true
            referencedRelation: "marketplace_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_customer_company_id_fkey"
            columns: ["customer_company_id"]
            isOneToOne: true
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_customer_company_id_fkey"
            columns: ["customer_company_id"]
            isOneToOne: true
            referencedRelation: "v_company_financial_period_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_customer_company_id_fkey"
            columns: ["customer_company_id"]
            isOneToOne: true
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_customer_company_id_fkey"
            columns: ["customer_company_id"]
            isOneToOne: true
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_customer_company_id_fkey"
            columns: ["customer_company_id"]
            isOneToOne: true
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      marketplace_customer_contacts: {
        Row: {
          contact_email: string
          contact_role: string
          contact_status: string
          created_at: string
          customer_account_id: string
          department: string | null
          first_name: string
          history_batch_id: string | null
          id: string
          is_primary: boolean
          job_title: string
          last_name: string
          metadata: Json
          organization_id: string
        }
        Insert: {
          contact_email: string
          contact_role: string
          contact_status?: string
          created_at?: string
          customer_account_id: string
          department?: string | null
          first_name: string
          history_batch_id?: string | null
          id?: string
          is_primary?: boolean
          job_title: string
          last_name: string
          metadata?: Json
          organization_id: string
        }
        Update: {
          contact_email?: string
          contact_role?: string
          contact_status?: string
          created_at?: string
          customer_account_id?: string
          department?: string | null
          first_name?: string
          history_batch_id?: string | null
          id?: string
          is_primary?: boolean
          job_title?: string
          last_name?: string
          metadata?: Json
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_customer_contacts_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "marketplace_customer_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_contacts_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_contacts_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_contacts_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_contacts_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_contacts_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_contacts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_contacts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      marketplace_customer_subscription_events: {
        Row: {
          created_at: string
          description: string
          event_at: string
          event_type: string
          history_batch_id: string | null
          id: string
          new_value: Json
          organization_id: string
          previous_value: Json
          subscription_id: string
        }
        Insert: {
          created_at?: string
          description: string
          event_at: string
          event_type: string
          history_batch_id?: string | null
          id?: string
          new_value?: Json
          organization_id: string
          previous_value?: Json
          subscription_id: string
        }
        Update: {
          created_at?: string
          description?: string
          event_at?: string
          event_type?: string
          history_batch_id?: string | null
          id?: string
          new_value?: Json
          organization_id?: string
          previous_value?: Json
          subscription_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_customer_subscription_events_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscription_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscription_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscription_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "marketplace_customer_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_customer_subscriptions: {
        Row: {
          billing_cycle: string
          cancelled_at: string | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          customer_account_id: string
          history_batch_id: string | null
          id: string
          metadata: Json
          monthly_amount: number
          next_billing_at: string | null
          organization_id: string
          plan_key: string
          source_sale_id: string | null
          starts_at: string
          status: string
          subscription_number: string
          updated_at: string
        }
        Insert: {
          billing_cycle: string
          cancelled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          customer_account_id: string
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          monthly_amount?: number
          next_billing_at?: string | null
          organization_id: string
          plan_key: string
          source_sale_id?: string | null
          starts_at: string
          status: string
          subscription_number: string
          updated_at?: string
        }
        Update: {
          billing_cycle?: string
          cancelled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          customer_account_id?: string
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          monthly_amount?: number
          next_billing_at?: string | null
          organization_id?: string
          plan_key?: string
          source_sale_id?: string | null
          starts_at?: string
          status?: string
          subscription_number?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_customer_subscriptions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "marketplace_customer_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_customer_subscriptions_source_sale_id_fkey"
            columns: ["source_sale_id"]
            isOneToOne: false
            referencedRelation: "marketplace_sales"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_deal_quotes: {
        Row: {
          accepted_at: string | null
          approval_required: boolean
          approved_at: string | null
          approved_by: string | null
          cart_id: string | null
          created_at: string
          currency: string
          discount_percent: number
          expires_at: string
          id: string
          list_monthly_total: number
          organization_id: string | null
          package_key: string | null
          pricing_snapshot: Json
          product_keys: string[]
          proposed_monthly_total: number
          quote_number: string
          reason: string
          status: string
          tenant_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          accepted_at?: string | null
          approval_required?: boolean
          approved_at?: string | null
          approved_by?: string | null
          cart_id?: string | null
          created_at?: string
          currency?: string
          discount_percent?: number
          expires_at?: string
          id?: string
          list_monthly_total: number
          organization_id?: string | null
          package_key?: string | null
          pricing_snapshot?: Json
          product_keys?: string[]
          proposed_monthly_total: number
          quote_number?: string
          reason: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          accepted_at?: string | null
          approval_required?: boolean
          approved_at?: string | null
          approved_by?: string | null
          cart_id?: string | null
          created_at?: string
          currency?: string
          discount_percent?: number
          expires_at?: string
          id?: string
          list_monthly_total?: number
          organization_id?: string | null
          package_key?: string | null
          pricing_snapshot?: Json
          product_keys?: string[]
          proposed_monthly_total?: number
          quote_number?: string
          reason?: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_deal_quotes_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "marketplace_carts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_deal_quotes_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_deal_quotes_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_deal_quotes_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_entitlements: {
        Row: {
          created_at: string
          entitlement_key: string
          expires_at: string | null
          id: string
          metadata: Json
          organization_id: string | null
          source_order_id: string | null
          starts_at: string | null
          status: string
          subscription_id: string | null
          subscription_item_id: string | null
          tenant_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          entitlement_key: string
          expires_at?: string | null
          id?: string
          metadata?: Json
          organization_id?: string | null
          source_order_id?: string | null
          starts_at?: string | null
          status?: string
          subscription_id?: string | null
          subscription_item_id?: string | null
          tenant_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          entitlement_key?: string
          expires_at?: string | null
          id?: string
          metadata?: Json
          organization_id?: string | null
          source_order_id?: string | null
          starts_at?: string | null
          status?: string
          subscription_id?: string | null
          subscription_item_id?: string | null
          tenant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_entitlements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_entitlements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_entitlements_source_order_id_fkey"
            columns: ["source_order_id"]
            isOneToOne: false
            referencedRelation: "marketplace_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_entitlements_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "marketplace_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_entitlements_subscription_item_id_fkey"
            columns: ["subscription_item_id"]
            isOneToOne: false
            referencedRelation: "marketplace_subscription_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_entitlements_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_match_settings: {
        Row: {
          active: boolean
          alert_frequency: string
          availability_weight: number
          created_at: string
          id: string
          maximum_daily_alerts: number
          minimum_daily_alerts: number
          name: string
          organization_id: string | null
          pay_weight: number
          settings: Json
          skill_weight: number
          tenant_id: string | null
          travel_weight: number
        }
        Insert: {
          active?: boolean
          alert_frequency?: string
          availability_weight?: number
          created_at?: string
          id?: string
          maximum_daily_alerts?: number
          minimum_daily_alerts?: number
          name?: string
          organization_id?: string | null
          pay_weight?: number
          settings?: Json
          skill_weight?: number
          tenant_id?: string | null
          travel_weight?: number
        }
        Update: {
          active?: boolean
          alert_frequency?: string
          availability_weight?: number
          created_at?: string
          id?: string
          maximum_daily_alerts?: number
          minimum_daily_alerts?: number
          name?: string
          organization_id?: string | null
          pay_weight?: number
          settings?: Json
          skill_weight?: number
          tenant_id?: string | null
          travel_weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_match_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_match_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_match_settings_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_messages: {
        Row: {
          application_id: string | null
          body: string
          company_id: string | null
          id: string
          job_posting_id: string | null
          message_type: string
          read_at: string | null
          recipient_profile_id: string | null
          sender_profile_id: string | null
          sent_at: string
          subject: string | null
        }
        Insert: {
          application_id?: string | null
          body: string
          company_id?: string | null
          id?: string
          job_posting_id?: string | null
          message_type?: string
          read_at?: string | null
          recipient_profile_id?: string | null
          sender_profile_id?: string | null
          sent_at?: string
          subject?: string | null
        }
        Update: {
          application_id?: string | null
          body?: string
          company_id?: string | null
          id?: string
          job_posting_id?: string | null
          message_type?: string
          read_at?: string | null
          recipient_profile_id?: string | null
          sender_profile_id?: string | null
          sent_at?: string
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_messages_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "job_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_messages_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "marketplace_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_messages_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_messages_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_financial_period_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_messages_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_messages_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_messages_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "marketplace_messages_job_posting_id_fkey"
            columns: ["job_posting_id"]
            isOneToOne: false
            referencedRelation: "job_postings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_messages_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_messages_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "marketplace_messages_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_messages_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      marketplace_notifications: {
        Row: {
          body: string | null
          channel: string
          created_at: string
          delivery_status: string
          failure_reason: string | null
          id: string
          job_posting_id: string | null
          match_id: string | null
          notification_type: string
          recipient_profile_id: string
          scheduled_for: string | null
          sent_at: string | null
          subject: string | null
        }
        Insert: {
          body?: string | null
          channel?: string
          created_at?: string
          delivery_status?: string
          failure_reason?: string | null
          id?: string
          job_posting_id?: string | null
          match_id?: string | null
          notification_type?: string
          recipient_profile_id: string
          scheduled_for?: string | null
          sent_at?: string | null
          subject?: string | null
        }
        Update: {
          body?: string | null
          channel?: string
          created_at?: string
          delivery_status?: string
          failure_reason?: string | null
          id?: string
          job_posting_id?: string | null
          match_id?: string | null
          notification_type?: string
          recipient_profile_id?: string
          scheduled_for?: string | null
          sent_at?: string | null
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_notifications_job_posting_id_fkey"
            columns: ["job_posting_id"]
            isOneToOne: false
            referencedRelation: "job_postings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_notifications_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "job_matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_notifications_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_notifications_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      marketplace_order_items: {
        Row: {
          configuration: Json
          created_at: string
          discount_amount: number
          id: string
          line_total: number
          order_id: string
          package_key: string | null
          price_snapshot: Json
          product_id: string | null
          product_key: string
          product_name: string
          quantity: number
          setup_fee: number
          sku: string
          unit_monthly_price: number
        }
        Insert: {
          configuration?: Json
          created_at?: string
          discount_amount?: number
          id?: string
          line_total?: number
          order_id: string
          package_key?: string | null
          price_snapshot?: Json
          product_id?: string | null
          product_key: string
          product_name: string
          quantity?: number
          setup_fee?: number
          sku: string
          unit_monthly_price?: number
        }
        Update: {
          configuration?: Json
          created_at?: string
          discount_amount?: number
          id?: string
          line_total?: number
          order_id?: string
          package_key?: string | null
          price_snapshot?: Json
          product_id?: string | null
          product_key?: string
          product_name?: string
          quantity?: number
          setup_fee?: number
          sku?: string
          unit_monthly_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "marketplace_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "marketplace_products"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_orders: {
        Row: {
          agreement_accepted_at: string | null
          agreement_version: string | null
          billing_snapshot: Json
          cart_id: string | null
          created_at: string
          currency: string
          discount_total: number
          fee_total: number
          id: string
          order_number: string
          organization_id: string | null
          package_key: string | null
          payment_status: string
          pricing_snapshot: Json
          promotion_id: string | null
          provider_key: string
          provider_reference: string | null
          provisioning_status: string
          recurring_monthly_total: number
          setup_total: number
          status: string
          subtotal: number
          tax_total: number
          tenant_id: string | null
          total_due: number
          updated_at: string
          user_id: string
        }
        Insert: {
          agreement_accepted_at?: string | null
          agreement_version?: string | null
          billing_snapshot?: Json
          cart_id?: string | null
          created_at?: string
          currency?: string
          discount_total?: number
          fee_total?: number
          id?: string
          order_number: string
          organization_id?: string | null
          package_key?: string | null
          payment_status?: string
          pricing_snapshot?: Json
          promotion_id?: string | null
          provider_key?: string
          provider_reference?: string | null
          provisioning_status?: string
          recurring_monthly_total?: number
          setup_total?: number
          status?: string
          subtotal?: number
          tax_total?: number
          tenant_id?: string | null
          total_due?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          agreement_accepted_at?: string | null
          agreement_version?: string | null
          billing_snapshot?: Json
          cart_id?: string | null
          created_at?: string
          currency?: string
          discount_total?: number
          fee_total?: number
          id?: string
          order_number?: string
          organization_id?: string | null
          package_key?: string | null
          payment_status?: string
          pricing_snapshot?: Json
          promotion_id?: string | null
          provider_key?: string
          provider_reference?: string | null
          provisioning_status?: string
          recurring_monthly_total?: number
          setup_total?: number
          status?: string
          subtotal?: number
          tax_total?: number
          tenant_id?: string | null
          total_due?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_orders_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "marketplace_carts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_orders_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "marketplace_promotions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_orders_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_packages: {
        Row: {
          active_status: string
          annual_company_price: number | null
          created_at: string
          description: string
          id: string
          included_product_keys: string[]
          is_recommended: boolean
          monthly_company_price: number | null
          name: string
          package_key: string
          pricing_status: string
          sort_order: number
          support_level: string
          updated_at: string
        }
        Insert: {
          active_status?: string
          annual_company_price?: number | null
          created_at?: string
          description?: string
          id?: string
          included_product_keys?: string[]
          is_recommended?: boolean
          monthly_company_price?: number | null
          name: string
          package_key: string
          pricing_status?: string
          sort_order?: number
          support_level?: string
          updated_at?: string
        }
        Update: {
          active_status?: string
          annual_company_price?: number | null
          created_at?: string
          description?: string
          id?: string
          included_product_keys?: string[]
          is_recommended?: boolean
          monthly_company_price?: number | null
          name?: string
          package_key?: string
          pricing_status?: string
          sort_order?: number
          support_level?: string
          updated_at?: string
        }
        Relationships: []
      }
      marketplace_price_calculations: {
        Row: {
          annual_savings: number
          benchmark_snapshot: Json
          calculation_notes: string
          created_at: string
          current_monthly_cost: number
          current_stack: Json
          id: string
          intellistack_monthly_cost: number
          monthly_savings: number
          organization_id: string | null
          savings_percent: number
          selected_product_keys: string[]
          systems_consolidated: number
          tenant_id: string | null
          user_id: string | null
        }
        Insert: {
          annual_savings?: number
          benchmark_snapshot?: Json
          calculation_notes?: string
          created_at?: string
          current_monthly_cost?: number
          current_stack?: Json
          id?: string
          intellistack_monthly_cost?: number
          monthly_savings?: number
          organization_id?: string | null
          savings_percent?: number
          selected_product_keys?: string[]
          systems_consolidated?: number
          tenant_id?: string | null
          user_id?: string | null
        }
        Update: {
          annual_savings?: number
          benchmark_snapshot?: Json
          calculation_notes?: string
          created_at?: string
          current_monthly_cost?: number
          current_stack?: Json
          id?: string
          intellistack_monthly_cost?: number
          monthly_savings?: number
          organization_id?: string | null
          savings_percent?: number
          selected_product_keys?: string[]
          systems_consolidated?: number
          tenant_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_price_calculations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_price_calculations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_price_calculations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_price_versions: {
        Row: {
          annual_company_price: number | null
          approval_status: string
          approved_at: string | null
          approved_by: string | null
          benchmark_notes: string | null
          created_at: string
          created_by: string | null
          currency: string
          discount_type: string | null
          discount_value: number | null
          effective_from: string
          effective_until: string | null
          eligibility: Json
          id: string
          margin_floor: number | null
          monthly_company_price: number | null
          package_key: string | null
          price_key: string
          pricing_model: string
          pricing_unit_label: string
          product_id: string | null
          promotional_monthly_price: number | null
          region: string
          setup_fee: number
          status: string
          version_number: number
        }
        Insert: {
          annual_company_price?: number | null
          approval_status?: string
          approved_at?: string | null
          approved_by?: string | null
          benchmark_notes?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          discount_type?: string | null
          discount_value?: number | null
          effective_from?: string
          effective_until?: string | null
          eligibility?: Json
          id?: string
          margin_floor?: number | null
          monthly_company_price?: number | null
          package_key?: string | null
          price_key: string
          pricing_model?: string
          pricing_unit_label?: string
          product_id?: string | null
          promotional_monthly_price?: number | null
          region?: string
          setup_fee?: number
          status?: string
          version_number?: number
        }
        Update: {
          annual_company_price?: number | null
          approval_status?: string
          approved_at?: string | null
          approved_by?: string | null
          benchmark_notes?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          discount_type?: string | null
          discount_value?: number | null
          effective_from?: string
          effective_until?: string | null
          eligibility?: Json
          id?: string
          margin_floor?: number | null
          monthly_company_price?: number | null
          package_key?: string | null
          price_key?: string
          pricing_model?: string
          pricing_unit_label?: string
          product_id?: string | null
          promotional_monthly_price?: number | null
          region?: string
          setup_fee?: number
          status?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_price_versions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "marketplace_products"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_products: {
        Row: {
          active_status: string
          addons: Json
          available_tenant_ids: string[]
          bogo_eligible: boolean
          capabilities: Json
          category_id: string | null
          checkout_enabled: boolean
          compatible_products: Json
          created_at: string
          dependencies: Json
          documentation_urls: Json
          faq: Json
          full_description: string
          icon_key: string | null
          id: string
          image_path: string | null
          included_features: Json
          incompatibilities: Json
          name: string
          package_keys: Json
          pricing_model: string
          pricing_reviewed_at: string | null
          pricing_unit_label: string
          product_key: string
          promotion_eligible: boolean
          provisioning_mode: string
          purchase_readiness: string
          readiness_notes: string | null
          short_description: string
          sku: string
          sort_order: number
          subcategory: string | null
          support_level: string
          theme_key: string | null
          updated_at: string
          version: string
          visibility: string
          visible_role_keys: string[]
        }
        Insert: {
          active_status?: string
          addons?: Json
          available_tenant_ids?: string[]
          bogo_eligible?: boolean
          capabilities?: Json
          category_id?: string | null
          checkout_enabled?: boolean
          compatible_products?: Json
          created_at?: string
          dependencies?: Json
          documentation_urls?: Json
          faq?: Json
          full_description?: string
          icon_key?: string | null
          id?: string
          image_path?: string | null
          included_features?: Json
          incompatibilities?: Json
          name: string
          package_keys?: Json
          pricing_model?: string
          pricing_reviewed_at?: string | null
          pricing_unit_label?: string
          product_key: string
          promotion_eligible?: boolean
          provisioning_mode?: string
          purchase_readiness?: string
          readiness_notes?: string | null
          short_description?: string
          sku: string
          sort_order?: number
          subcategory?: string | null
          support_level?: string
          theme_key?: string | null
          updated_at?: string
          version?: string
          visibility?: string
          visible_role_keys?: string[]
        }
        Update: {
          active_status?: string
          addons?: Json
          available_tenant_ids?: string[]
          bogo_eligible?: boolean
          capabilities?: Json
          category_id?: string | null
          checkout_enabled?: boolean
          compatible_products?: Json
          created_at?: string
          dependencies?: Json
          documentation_urls?: Json
          faq?: Json
          full_description?: string
          icon_key?: string | null
          id?: string
          image_path?: string | null
          included_features?: Json
          incompatibilities?: Json
          name?: string
          package_keys?: Json
          pricing_model?: string
          pricing_reviewed_at?: string | null
          pricing_unit_label?: string
          product_key?: string
          promotion_eligible?: boolean
          provisioning_mode?: string
          purchase_readiness?: string
          readiness_notes?: string | null
          short_description?: string
          sku?: string
          sort_order?: number
          subcategory?: string | null
          support_level?: string
          theme_key?: string | null
          updated_at?: string
          version?: string
          visibility?: string
          visible_role_keys?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "marketplace_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_promotions: {
        Row: {
          created_at: string
          created_by: string | null
          currency: string
          description: string
          eligibility: Json
          eligible_package_keys: string[]
          eligible_product_keys: string[]
          ends_at: string | null
          id: string
          max_redemptions: number | null
          name: string
          promo_code: string | null
          promotion_key: string
          promotion_type: string
          redemption_count: number
          rules: Json
          starts_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          currency?: string
          description?: string
          eligibility?: Json
          eligible_package_keys?: string[]
          eligible_product_keys?: string[]
          ends_at?: string | null
          id?: string
          max_redemptions?: number | null
          name: string
          promo_code?: string | null
          promotion_key: string
          promotion_type: string
          redemption_count?: number
          rules?: Json
          starts_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          currency?: string
          description?: string
          eligibility?: Json
          eligible_package_keys?: string[]
          eligible_product_keys?: string[]
          ends_at?: string | null
          id?: string
          max_redemptions?: number | null
          name?: string
          promo_code?: string | null
          promotion_key?: string
          promotion_type?: string
          redemption_count?: number
          rules?: Json
          starts_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      marketplace_reviews: {
        Row: {
          created_at: string
          id: string
          rating: number
          review_text: string | null
          reviewee_profile_id: string
          reviewer_profile_id: string
          work_assignment_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          rating: number
          review_text?: string | null
          reviewee_profile_id: string
          reviewer_profile_id: string
          work_assignment_id: string
        }
        Update: {
          created_at?: string
          id?: string
          rating?: number
          review_text?: string | null
          reviewee_profile_id?: string
          reviewer_profile_id?: string
          work_assignment_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_reviews_reviewee_profile_id_fkey"
            columns: ["reviewee_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_reviews_reviewee_profile_id_fkey"
            columns: ["reviewee_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "marketplace_reviews_reviewer_profile_id_fkey"
            columns: ["reviewer_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_reviews_reviewer_profile_id_fkey"
            columns: ["reviewer_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "marketplace_reviews_work_assignment_id_fkey"
            columns: ["work_assignment_id"]
            isOneToOne: false
            referencedRelation: "work_assignments"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_sale_items: {
        Row: {
          created_at: string
          history_batch_id: string | null
          id: string
          line_total: number
          organization_id: string
          price_snapshot: Json
          product_id: string | null
          product_key: string
          product_name: string
          quantity: number
          sale_id: string
          setup_fee: number
          sku: string
          unit_monthly_price: number
        }
        Insert: {
          created_at?: string
          history_batch_id?: string | null
          id?: string
          line_total?: number
          organization_id: string
          price_snapshot?: Json
          product_id?: string | null
          product_key: string
          product_name: string
          quantity?: number
          sale_id: string
          setup_fee?: number
          sku: string
          unit_monthly_price?: number
        }
        Update: {
          created_at?: string
          history_batch_id?: string | null
          id?: string
          line_total?: number
          organization_id?: string
          price_snapshot?: Json
          product_id?: string | null
          product_key?: string
          product_name?: string
          quantity?: number
          sale_id?: string
          setup_fee?: number
          sku?: string
          unit_monthly_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_sale_items_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_sale_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_sale_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_sale_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "marketplace_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_sale_items_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "marketplace_sales"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_sales: {
        Row: {
          created_at: string
          currency: string
          customer_account_id: string
          discount_total: number
          history_batch_id: string | null
          id: string
          metadata: Json
          notes: string | null
          organization_id: string
          payment_status: string
          payment_terms: string
          sale_date: string
          sale_number: string
          sales_channel: string
          sales_rep_person_id: string | null
          status: string
          subtotal: number
          tax_total: number
          total_amount: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string
          customer_account_id: string
          discount_total?: number
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id: string
          payment_status: string
          payment_terms?: string
          sale_date: string
          sale_number: string
          sales_channel?: string
          sales_rep_person_id?: string | null
          status: string
          subtotal?: number
          tax_total?: number
          total_amount?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string
          customer_account_id?: string
          discount_total?: number
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id?: string
          payment_status?: string
          payment_terms?: string
          sale_date?: string
          sale_number?: string
          sales_channel?: string
          sales_rep_person_id?: string | null
          status?: string
          subtotal?: number
          tax_total?: number
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_sales_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "marketplace_customer_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_sales_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_sales_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_sales_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_sales_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "marketplace_sales_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_sales_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_sales_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_sales_sales_rep_person_id_fkey"
            columns: ["sales_rep_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "marketplace_sales_sales_rep_person_id_fkey"
            columns: ["sales_rep_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_saved_items: {
        Row: {
          created_at: string
          currency: string
          id: string
          organization_id: string | null
          price_when_saved: number | null
          product_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          currency?: string
          id?: string
          organization_id?: string | null
          price_when_saved?: number | null
          product_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          currency?: string
          id?: string
          organization_id?: string | null
          price_when_saved?: number | null
          product_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_saved_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_saved_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_saved_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "marketplace_products"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_subscription_items: {
        Row: {
          addons: Json
          created_at: string
          entitlement_key: string
          id: string
          monthly_amount: number
          product_id: string | null
          product_key: string
          quantity: number
          status: string
          subscription_id: string
          updated_at: string
        }
        Insert: {
          addons?: Json
          created_at?: string
          entitlement_key: string
          id?: string
          monthly_amount?: number
          product_id?: string | null
          product_key: string
          quantity?: number
          status?: string
          subscription_id: string
          updated_at?: string
        }
        Update: {
          addons?: Json
          created_at?: string
          entitlement_key?: string
          id?: string
          monthly_amount?: number
          product_id?: string | null
          product_key?: string
          quantity?: number
          status?: string
          subscription_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_subscription_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "marketplace_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_subscription_items_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "marketplace_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_subscriptions: {
        Row: {
          billing_cycle: string
          cancelled_at: string | null
          created_at: string
          currency: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          metadata: Json
          monthly_amount: number
          next_billing_at: string | null
          order_id: string | null
          organization_id: string | null
          package_key: string | null
          provider_key: string
          provider_subscription_reference: string | null
          status: string
          subscription_number: string
          tenant_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          billing_cycle?: string
          cancelled_at?: string | null
          created_at?: string
          currency?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          metadata?: Json
          monthly_amount?: number
          next_billing_at?: string | null
          order_id?: string | null
          organization_id?: string | null
          package_key?: string | null
          provider_key?: string
          provider_subscription_reference?: string | null
          status?: string
          subscription_number: string
          tenant_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          billing_cycle?: string
          cancelled_at?: string | null
          created_at?: string
          currency?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          metadata?: Json
          monthly_amount?: number
          next_billing_at?: string | null
          order_id?: string | null
          organization_id?: string | null
          package_key?: string | null
          provider_key?: string
          provider_subscription_reference?: string | null
          status?: string
          subscription_number?: string
          tenant_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_subscriptions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "marketplace_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_subscriptions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      msp_tenant_service_assignments: {
        Row: {
          approved_at: string | null
          approved_by_profile_id: string | null
          created_at: string
          customer_tenant_id: string
          ends_at: string | null
          id: string
          service_organization_id: string
          service_scope: string[]
          starts_at: string
          status: string
          updated_at: string
          workforce_person_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          created_at?: string
          customer_tenant_id: string
          ends_at?: string | null
          id?: string
          service_organization_id: string
          service_scope: string[]
          starts_at?: string
          status?: string
          updated_at?: string
          workforce_person_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          created_at?: string
          customer_tenant_id?: string
          ends_at?: string | null
          id?: string
          service_organization_id?: string
          service_scope?: string[]
          starts_at?: string
          status?: string
          updated_at?: string
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "msp_tenant_service_assignments_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "msp_tenant_service_assignments_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "msp_tenant_service_assignments_customer_tenant_id_fkey"
            columns: ["customer_tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "msp_tenant_service_assignments_service_organization_id_fkey"
            columns: ["service_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "msp_tenant_service_assignments_service_organization_id_fkey"
            columns: ["service_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "msp_tenant_service_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "msp_tenant_service_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      network_assets: {
        Row: {
          asset_name: string
          asset_status: Database["public"]["Enums"]["asset_status"]
          asset_type: string
          configuration_reference: string | null
          created_at: string
          hostname: string | null
          id: string
          last_checked_at: string | null
          management_address: unknown
          metadata: Json
          model: string | null
          organization_id: string
          site_name: string | null
          tenant_id: string | null
          vendor: string | null
        }
        Insert: {
          asset_name: string
          asset_status?: Database["public"]["Enums"]["asset_status"]
          asset_type: string
          configuration_reference?: string | null
          created_at?: string
          hostname?: string | null
          id?: string
          last_checked_at?: string | null
          management_address?: unknown
          metadata?: Json
          model?: string | null
          organization_id: string
          site_name?: string | null
          tenant_id?: string | null
          vendor?: string | null
        }
        Update: {
          asset_name?: string
          asset_status?: Database["public"]["Enums"]["asset_status"]
          asset_type?: string
          configuration_reference?: string | null
          created_at?: string
          hostname?: string | null
          id?: string
          last_checked_at?: string | null
          management_address?: unknown
          metadata?: Json
          model?: string | null
          organization_id?: string
          site_name?: string | null
          tenant_id?: string | null
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "network_assets_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "network_assets_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "network_assets_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      network_segments: {
        Row: {
          cidr: unknown
          created_at: string
          id: string
          name: string
          organization_id: string
          purpose: string | null
          security_zone: string | null
          tenant_id: string | null
          vlan_id: number | null
        }
        Insert: {
          cidr?: unknown
          created_at?: string
          id?: string
          name: string
          organization_id: string
          purpose?: string | null
          security_zone?: string | null
          tenant_id?: string | null
          vlan_id?: number | null
        }
        Update: {
          cidr?: unknown
          created_at?: string
          id?: string
          name?: string
          organization_id?: string
          purpose?: string | null
          security_zone?: string | null
          tenant_id?: string | null
          vlan_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "network_segments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "network_segments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "network_segments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_events: {
        Row: {
          body: string | null
          created_at: string
          event_type: string
          id: string
          organization_id: string | null
          read_at: string | null
          recipient_profile_id: string
          target_path: string | null
          title: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          event_type: string
          id?: string
          organization_id?: string | null
          read_at?: string | null
          recipient_profile_id: string
          target_path?: string | null
          title: string
        }
        Update: {
          body?: string | null
          created_at?: string
          event_type?: string
          id?: string
          organization_id?: string | null
          read_at?: string | null
          recipient_profile_id?: string
          target_path?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "notification_events_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_events_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      operation_idempotency_keys: {
        Row: {
          completed_at: string | null
          created_at: string
          expires_at: string
          id: string
          idempotency_key: string
          operation_status: string
          request_hash: string
          resource_id: string | null
          resource_type: string | null
          response_body: Json | null
          response_status: number | null
          scope_key: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          expires_at?: string
          id?: string
          idempotency_key: string
          operation_status?: string
          request_hash: string
          resource_id?: string | null
          resource_type?: string | null
          response_body?: Json | null
          response_status?: number | null
          scope_key: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          expires_at?: string
          id?: string
          idempotency_key?: string
          operation_status?: string
          request_hash?: string
          resource_id?: string | null
          resource_type?: string | null
          response_body?: Json | null
          response_status?: number | null
          scope_key?: string
        }
        Relationships: []
      }
      organizational_units: {
        Row: {
          created_at: string
          description: string | null
          distinguished_path: string | null
          id: string
          name: string
          organization_id: string
          parent_unit_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          distinguished_path?: string | null
          id?: string
          name: string
          organization_id: string
          parent_unit_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          distinguished_path?: string | null
          id?: string
          name?: string
          organization_id?: string
          parent_unit_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organizational_units_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organizational_units_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organizational_units_parent_unit_id_fkey"
            columns: ["parent_unit_id"]
            isOneToOne: false
            referencedRelation: "organizational_units"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          id: string
          legal_name: string | null
          name: string
          organization_code: string
          organization_type: string
          parent_organization_id: string | null
          readable_company_id: string | null
          region: string | null
          settings: Json
          slug: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          legal_name?: string | null
          name: string
          organization_code?: string
          organization_type?: string
          parent_organization_id?: string | null
          readable_company_id?: string | null
          region?: string | null
          settings?: Json
          slug?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          legal_name?: string | null
          name?: string
          organization_code?: string
          organization_type?: string
          parent_organization_id?: string | null
          readable_company_id?: string | null
          region?: string | null
          settings?: Json
          slug?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organizations_parent_organization_id_fkey"
            columns: ["parent_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organizations_parent_organization_id_fkey"
            columns: ["parent_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      permission_scope_grants: {
        Row: {
          conditions: Json
          created_at: string
          department_id: string | null
          effect: string
          expires_at: string | null
          granted_by: string | null
          id: string
          organization_id: string | null
          permission_id: string
          resource_id: string | null
          resource_type: string | null
          role_id: string
          tenant_id: string | null
        }
        Insert: {
          conditions?: Json
          created_at?: string
          department_id?: string | null
          effect?: string
          expires_at?: string | null
          granted_by?: string | null
          id?: string
          organization_id?: string | null
          permission_id: string
          resource_id?: string | null
          resource_type?: string | null
          role_id: string
          tenant_id?: string | null
        }
        Update: {
          conditions?: Json
          created_at?: string
          department_id?: string | null
          effect?: string
          expires_at?: string | null
          granted_by?: string | null
          id?: string
          organization_id?: string | null
          permission_id?: string
          resource_id?: string | null
          resource_type?: string | null
          role_id?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "permission_scope_grants_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "permission_scope_grants_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "permission_scope_grants_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "permission_scope_grants_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "permission_scope_grants_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "permission_scope_grants_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "permission_scope_grants_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "permission_scope_grants_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          action: string
          created_at: string
          description: string | null
          id: string
          permission_key: string
          resource: string
          sensitivity: string
        }
        Insert: {
          action: string
          created_at?: string
          description?: string | null
          id?: string
          permission_key: string
          resource: string
          sensitivity?: string
        }
        Update: {
          action?: string
          created_at?: string
          description?: string | null
          id?: string
          permission_key?: string
          resource?: string
          sensitivity?: string
        }
        Relationships: []
      }
      platform_identity_memberships: {
        Row: {
          company_id: string | null
          created_at: string
          global_identity_id: string
          id: string
          membership_status: string
          platform_identifier: string
          platform_name: string
          tenant_id: string | null
          updated_at: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          global_identity_id: string
          id?: string
          membership_status?: string
          platform_identifier: string
          platform_name: string
          tenant_id?: string | null
          updated_at?: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          global_identity_id?: string
          id?: string
          membership_status?: string
          platform_identifier?: string
          platform_name?: string
          tenant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "platform_identity_memberships_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_identity_memberships_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "platform_identity_memberships_global_identity_id_fkey"
            columns: ["global_identity_id"]
            isOneToOne: false
            referencedRelation: "global_identity_directory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_identity_memberships_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      product_spec_documents: {
        Row: {
          content_markdown: string
          created_at: string
          document_format: string
          effective_at: string | null
          id: string
          slug: string
          source_of_truth: string
          status: string
          structured_content: Json
          title: string
          updated_at: string
          version: string
        }
        Insert: {
          content_markdown: string
          created_at?: string
          document_format?: string
          effective_at?: string | null
          id?: string
          slug: string
          source_of_truth?: string
          status?: string
          structured_content?: Json
          title: string
          updated_at?: string
          version: string
        }
        Update: {
          content_markdown?: string
          created_at?: string
          document_format?: string
          effective_at?: string | null
          id?: string
          slug?: string
          source_of_truth?: string
          status?: string
          structured_content?: Json
          title?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
      profile_roles: {
        Row: {
          created_at: string
          expires_at: string | null
          grant_reason: string | null
          granted_by: string | null
          id: string
          is_active: boolean
          organization_id: string | null
          profile_id: string
          role_id: string
          starts_at: string
          tenant_id: string | null
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          grant_reason?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean
          organization_id?: string | null
          profile_id: string
          role_id: string
          starts_at?: string
          tenant_id?: string | null
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          grant_reason?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean
          organization_id?: string | null
          profile_id?: string
          role_id?: string
          starts_at?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_roles_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_roles_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "profile_roles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_roles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "profile_roles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_roles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "profile_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_roles_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_storage_path: string | null
          avatar_url: string | null
          company_global_id: string | null
          country_code: string | null
          created_at: string
          department_id: string | null
          display_name: string | null
          employee_global_id: string | null
          first_name: string | null
          global_person_id: string | null
          id: string
          job_title: string | null
          last_name: string | null
          location_city: string | null
          location_region: string | null
          manager_profile_id: string | null
          member_status: Database["public"]["Enums"]["member_status"]
          organization_id: string | null
          organizational_unit_id: string | null
          profile_metadata: Json
          tenant_id: string | null
          timezone: string | null
          updated_at: string
          work_email: string | null
          work_phone: string | null
        }
        Insert: {
          avatar_storage_path?: string | null
          avatar_url?: string | null
          company_global_id?: string | null
          country_code?: string | null
          created_at?: string
          department_id?: string | null
          display_name?: string | null
          employee_global_id?: string | null
          first_name?: string | null
          global_person_id?: string | null
          id: string
          job_title?: string | null
          last_name?: string | null
          location_city?: string | null
          location_region?: string | null
          manager_profile_id?: string | null
          member_status?: Database["public"]["Enums"]["member_status"]
          organization_id?: string | null
          organizational_unit_id?: string | null
          profile_metadata?: Json
          tenant_id?: string | null
          timezone?: string | null
          updated_at?: string
          work_email?: string | null
          work_phone?: string | null
        }
        Update: {
          avatar_storage_path?: string | null
          avatar_url?: string | null
          company_global_id?: string | null
          country_code?: string | null
          created_at?: string
          department_id?: string | null
          display_name?: string | null
          employee_global_id?: string | null
          first_name?: string | null
          global_person_id?: string | null
          id?: string
          job_title?: string | null
          last_name?: string | null
          location_city?: string | null
          location_region?: string | null
          manager_profile_id?: string | null
          member_status?: Database["public"]["Enums"]["member_status"]
          organization_id?: string | null
          organizational_unit_id?: string | null
          profile_metadata?: Json
          tenant_id?: string | null
          timezone?: string | null
          updated_at?: string
          work_email?: string | null
          work_phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_manager_profile_id_fkey"
            columns: ["manager_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_manager_profile_id_fkey"
            columns: ["manager_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "profiles_organizational_unit_id_fkey"
            columns: ["organizational_unit_id"]
            isOneToOne: false
            referencedRelation: "organizational_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      project_change_ledger: {
        Row: {
          actor_display_name: string | null
          actor_email: string | null
          actor_type: string
          branch_name: string | null
          change_area: string
          change_summary: string
          commit_sha: string | null
          contributor_name: string | null
          created_at: string
          handoff_notes: string | null
          id: string
          metadata: Json
          project_key: string
          repository_full_name: string
          verification_status: string
        }
        Insert: {
          actor_display_name?: string | null
          actor_email?: string | null
          actor_type?: string
          branch_name?: string | null
          change_area: string
          change_summary: string
          commit_sha?: string | null
          contributor_name?: string | null
          created_at?: string
          handoff_notes?: string | null
          id?: string
          metadata?: Json
          project_key?: string
          repository_full_name: string
          verification_status?: string
        }
        Update: {
          actor_display_name?: string | null
          actor_email?: string | null
          actor_type?: string
          branch_name?: string | null
          change_area?: string
          change_summary?: string
          commit_sha?: string | null
          contributor_name?: string | null
          created_at?: string
          handoff_notes?: string | null
          id?: string
          metadata?: Json
          project_key?: string
          repository_full_name?: string
          verification_status?: string
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          permission_id: string
          role_id: string
          scope: Database["public"]["Enums"]["access_scope"]
        }
        Insert: {
          permission_id: string
          role_id: string
          scope?: Database["public"]["Enums"]["access_scope"]
        }
        Update: {
          permission_id?: string
          role_id?: string
          scope?: Database["public"]["Enums"]["access_scope"]
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_privileged: boolean
          is_system_role: boolean
          name: string
          role_key: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_privileged?: boolean
          is_system_role?: boolean
          name: string
          role_key: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_privileged?: boolean
          is_system_role?: boolean
          name?: string
          role_key?: string
        }
        Relationships: []
      }
      service_catalog: {
        Row: {
          approval_rules: Json
          created_at: string
          description: string | null
          id: string
          name: string
          organization_id: string | null
          owner_department_id: string | null
          request_schema: Json
          service_key: string
          status: string
        }
        Insert: {
          approval_rules?: Json
          created_at?: string
          description?: string | null
          id?: string
          name: string
          organization_id?: string | null
          owner_department_id?: string | null
          request_schema?: Json
          service_key: string
          status?: string
        }
        Update: {
          approval_rules?: Json
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          organization_id?: string | null
          owner_department_id?: string | null
          request_schema?: Json
          service_key?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_catalog_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_catalog_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "service_catalog_owner_department_id_fkey"
            columns: ["owner_department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      site_contact_submissions: {
        Row: {
          assigned_to: string | null
          company: string | null
          consent: boolean
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string
          topic: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          company?: string | null
          consent?: boolean
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string
          topic?: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          company?: string | null
          consent?: boolean
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_pages: {
        Row: {
          canonical_path: string | null
          content_markdown: string
          created_at: string
          created_by: string | null
          id: string
          locale: string
          og_image_url: string | null
          page_type: string
          published_at: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          status: string
          summary: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          canonical_path?: string | null
          content_markdown?: string
          created_at?: string
          created_by?: string | null
          id?: string
          locale?: string
          og_image_url?: string | null
          page_type?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          status?: string
          summary?: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          canonical_path?: string | null
          content_markdown?: string
          created_at?: string
          created_by?: string | null
          id?: string
          locale?: string
          og_image_url?: string | null
          page_type?: string
          published_at?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          status?: string
          summary?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      site_social_links: {
        Row: {
          created_at: string
          created_by: string | null
          icon_key: string
          id: string
          is_active: boolean
          label: string
          platform: string
          sort_order: number
          updated_at: string
          updated_by: string | null
          url: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          icon_key?: string
          id?: string
          is_active?: boolean
          label: string
          platform: string
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
          url: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          icon_key?: string
          id?: string
          is_active?: boolean
          label?: string
          platform?: string
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
          url?: string
        }
        Relationships: []
      }
      situation_runs: {
        Row: {
          completed_at: string | null
          final_outcome: string | null
          id: string
          observations: Json
          organization_id: string | null
          run_status: string
          situation_id: string
          started_at: string
          started_by: string | null
          tenant_id: string | null
        }
        Insert: {
          completed_at?: string | null
          final_outcome?: string | null
          id?: string
          observations?: Json
          organization_id?: string | null
          run_status?: string
          situation_id: string
          started_at?: string
          started_by?: string | null
          tenant_id?: string | null
        }
        Update: {
          completed_at?: string | null
          final_outcome?: string | null
          id?: string
          observations?: Json
          organization_id?: string | null
          run_status?: string
          situation_id?: string
          started_at?: string
          started_by?: string | null
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "situation_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "situation_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "situation_runs_situation_id_fkey"
            columns: ["situation_id"]
            isOneToOne: false
            referencedRelation: "situations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "situation_runs_started_by_fkey"
            columns: ["started_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "situation_runs_started_by_fkey"
            columns: ["started_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "situation_runs_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      situations: {
        Row: {
          category: string
          created_at: string
          description: string | null
          difficulty: string
          id: string
          is_published: boolean
          scenario_definition: Json
          situation_key: string
          title: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          difficulty?: string
          id?: string
          is_published?: boolean
          scenario_definition?: Json
          situation_key: string
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          difficulty?: string
          id?: string
          is_published?: boolean
          scenario_definition?: Json
          situation_key?: string
          title?: string
        }
        Relationships: []
      }
      skills: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          skill_key: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          skill_key: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          skill_key?: string
        }
        Relationships: []
      }
      tenants: {
        Row: {
          created_at: string
          id: string
          isolation_key: string
          name: string
          organization_id: string
          readable_tenant_id: string | null
          settings: Json
          slug: string
          status: string
          tenant_code: string
        }
        Insert: {
          created_at?: string
          id?: string
          isolation_key?: string
          name: string
          organization_id: string
          readable_tenant_id?: string | null
          settings?: Json
          slug: string
          status?: string
          tenant_code?: string
        }
        Update: {
          created_at?: string
          id?: string
          isolation_key?: string
          name?: string
          organization_id?: string
          readable_tenant_id?: string | null
          settings?: Json
          slug?: string
          status?: string
          tenant_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenants_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenants_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      tester_feedback: {
        Row: {
          actual_result: string | null
          area: string
          created_at: string
          description: string
          expected_result: string | null
          id: string
          organization_id: string | null
          severity: string
          status: string
          steps_to_reproduce: string | null
          submitted_by: string | null
          title: string
        }
        Insert: {
          actual_result?: string | null
          area: string
          created_at?: string
          description: string
          expected_result?: string | null
          id?: string
          organization_id?: string | null
          severity?: string
          status?: string
          steps_to_reproduce?: string | null
          submitted_by?: string | null
          title: string
        }
        Update: {
          actual_result?: string | null
          area?: string
          created_at?: string
          description?: string
          expected_result?: string | null
          id?: string
          organization_id?: string | null
          severity?: string
          status?: string
          steps_to_reproduce?: string | null
          submitted_by?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tester_feedback_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tester_feedback_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "tester_feedback_submitted_by_fkey"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tester_feedback_submitted_by_fkey"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      theme_preferences: {
        Row: {
          id: string
          preferences: Json
          profile_id: string
          theme_key: string
          updated_at: string
        }
        Insert: {
          id?: string
          preferences?: Json
          profile_id: string
          theme_key?: string
          updated_at?: string
        }
        Update: {
          id?: string
          preferences?: Json
          profile_id?: string
          theme_key?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "theme_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "theme_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      ticket_approval_requests: {
        Row: {
          approver_profile_id: string | null
          decided_at: string | null
          decision_reason: string | null
          id: string
          organization_id: string
          permission_key: string
          reason: string
          requested_at: string
          requested_by: string
          status: string
          tenant_id: string | null
          ticket_id: string
        }
        Insert: {
          approver_profile_id?: string | null
          decided_at?: string | null
          decision_reason?: string | null
          id?: string
          organization_id: string
          permission_key: string
          reason: string
          requested_at?: string
          requested_by: string
          status?: string
          tenant_id?: string | null
          ticket_id: string
        }
        Update: {
          approver_profile_id?: string | null
          decided_at?: string | null
          decision_reason?: string | null
          id?: string
          organization_id?: string
          permission_key?: string
          reason?: string
          requested_at?: string
          requested_by?: string
          status?: string
          tenant_id?: string | null
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_approval_requests_approver_profile_id_fkey"
            columns: ["approver_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_approval_requests_approver_profile_id_fkey"
            columns: ["approver_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_approval_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_approval_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_approval_requests_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_approval_requests_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_approval_requests_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_approval_requests_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_attachment_links: {
        Row: {
          created_at: string
          file_name: string
          id: string
          message_id: string | null
          mime_type: string | null
          organization_id: string
          scan_status: string
          size_bytes: number | null
          storage_bucket: string
          storage_path: string
          tenant_id: string
          ticket_id: string
          uploaded_by_profile_id: string | null
          visibility: string
        }
        Insert: {
          created_at?: string
          file_name: string
          id?: string
          message_id?: string | null
          mime_type?: string | null
          organization_id: string
          scan_status?: string
          size_bytes?: number | null
          storage_bucket?: string
          storage_path: string
          tenant_id: string
          ticket_id: string
          uploaded_by_profile_id?: string | null
          visibility?: string
        }
        Update: {
          created_at?: string
          file_name?: string
          id?: string
          message_id?: string | null
          mime_type?: string | null
          organization_id?: string
          scan_status?: string
          size_bytes?: number | null
          storage_bucket?: string
          storage_path?: string
          tenant_id?: string
          ticket_id?: string
          uploaded_by_profile_id?: string | null
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_attachment_links_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "ticket_conversation_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_attachment_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_attachment_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_attachment_links_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_attachment_links_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_attachment_links_uploaded_by_profile_id_fkey"
            columns: ["uploaded_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_attachment_links_uploaded_by_profile_id_fkey"
            columns: ["uploaded_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      ticket_conversation_messages: {
        Row: {
          author_profile_id: string | null
          body: string
          channel: string
          created_at: string
          delivered_at: string | null
          id: string
          metadata: Json
          organization_id: string
          read_at: string | null
          recipient_profile_id: string | null
          reply_to_message_id: string | null
          tenant_id: string
          ticket_id: string
          updated_at: string
          visibility: string
        }
        Insert: {
          author_profile_id?: string | null
          body: string
          channel: string
          created_at?: string
          delivered_at?: string | null
          id?: string
          metadata?: Json
          organization_id: string
          read_at?: string | null
          recipient_profile_id?: string | null
          reply_to_message_id?: string | null
          tenant_id: string
          ticket_id: string
          updated_at?: string
          visibility?: string
        }
        Update: {
          author_profile_id?: string | null
          body?: string
          channel?: string
          created_at?: string
          delivered_at?: string | null
          id?: string
          metadata?: Json
          organization_id?: string
          read_at?: string | null
          recipient_profile_id?: string | null
          reply_to_message_id?: string | null
          tenant_id?: string
          ticket_id?: string
          updated_at?: string
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_conversation_messages_author_profile_id_fkey"
            columns: ["author_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_author_profile_id_fkey"
            columns: ["author_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_recipient_profile_id_fkey"
            columns: ["recipient_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_reply_to_message_id_fkey"
            columns: ["reply_to_message_id"]
            isOneToOne: false
            referencedRelation: "ticket_conversation_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_conversation_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_device_links: {
        Row: {
          created_at: string
          device_id: string
          id: string
          linked_by: string | null
          notes: string | null
          relationship_type: string
          ticket_id: string
        }
        Insert: {
          created_at?: string
          device_id: string
          id?: string
          linked_by?: string | null
          notes?: string | null
          relationship_type?: string
          ticket_id: string
        }
        Update: {
          created_at?: string
          device_id?: string
          id?: string
          linked_by?: string | null
          notes?: string | null
          relationship_type?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_device_links_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_device_links_linked_by_fkey"
            columns: ["linked_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_device_links_linked_by_fkey"
            columns: ["linked_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_device_links_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_escalations: {
        Row: {
          acknowledged_at: string | null
          assigned_to: string | null
          created_at: string
          due_at: string | null
          escalated_by: string | null
          escalation_reason: string
          history_batch_id: string | null
          id: string
          level: number
          organization_id: string
          resolved_at: string | null
          status: string
          tenant_id: string | null
          ticket_id: string
          updated_at: string
        }
        Insert: {
          acknowledged_at?: string | null
          assigned_to?: string | null
          created_at?: string
          due_at?: string | null
          escalated_by?: string | null
          escalation_reason: string
          history_batch_id?: string | null
          id?: string
          level?: number
          organization_id: string
          resolved_at?: string | null
          status?: string
          tenant_id?: string | null
          ticket_id: string
          updated_at?: string
        }
        Update: {
          acknowledged_at?: string | null
          assigned_to?: string | null
          created_at?: string
          due_at?: string | null
          escalated_by?: string | null
          escalation_reason?: string
          history_batch_id?: string | null
          id?: string
          level?: number
          organization_id?: string
          resolved_at?: string | null
          status?: string
          tenant_id?: string | null
          ticket_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_escalations_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_escalations_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_escalations_escalated_by_fkey"
            columns: ["escalated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_escalations_escalated_by_fkey"
            columns: ["escalated_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_escalations_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_escalations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_escalations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_escalations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_escalations_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_handoffs: {
        Row: {
          accepted_at: string | null
          blocker: string | null
          completed_at: string | null
          created_at: string
          due_at: string | null
          from_profile_id: string | null
          handoff_type: string
          id: string
          next_steps: string | null
          organization_id: string
          status: string
          summary: string
          tenant_id: string | null
          ticket_id: string
          to_profile_id: string | null
          work_completed: string | null
        }
        Insert: {
          accepted_at?: string | null
          blocker?: string | null
          completed_at?: string | null
          created_at?: string
          due_at?: string | null
          from_profile_id?: string | null
          handoff_type?: string
          id?: string
          next_steps?: string | null
          organization_id: string
          status?: string
          summary: string
          tenant_id?: string | null
          ticket_id: string
          to_profile_id?: string | null
          work_completed?: string | null
        }
        Update: {
          accepted_at?: string | null
          blocker?: string | null
          completed_at?: string | null
          created_at?: string
          due_at?: string | null
          from_profile_id?: string | null
          handoff_type?: string
          id?: string
          next_steps?: string | null
          organization_id?: string
          status?: string
          summary?: string
          tenant_id?: string | null
          ticket_id?: string
          to_profile_id?: string | null
          work_completed?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_handoffs_from_profile_id_fkey"
            columns: ["from_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_handoffs_from_profile_id_fkey"
            columns: ["from_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_handoffs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_handoffs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_handoffs_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_handoffs_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_handoffs_to_profile_id_fkey"
            columns: ["to_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_handoffs_to_profile_id_fkey"
            columns: ["to_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      ticket_knowledge_links: {
        Row: {
          created_at: string
          id: string
          knowledge_base_id: string
          link_reason: string | null
          linked_by_profile_id: string | null
          organization_id: string
          relevance_score: number | null
          tenant_id: string
          ticket_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          knowledge_base_id: string
          link_reason?: string | null
          linked_by_profile_id?: string | null
          organization_id: string
          relevance_score?: number | null
          tenant_id: string
          ticket_id: string
        }
        Update: {
          created_at?: string
          id?: string
          knowledge_base_id?: string
          link_reason?: string | null
          linked_by_profile_id?: string | null
          organization_id?: string
          relevance_score?: number | null
          tenant_id?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_knowledge_links_knowledge_base_id_fkey"
            columns: ["knowledge_base_id"]
            isOneToOne: false
            referencedRelation: "knowledge_bases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_knowledge_links_linked_by_profile_id_fkey"
            columns: ["linked_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_knowledge_links_linked_by_profile_id_fkey"
            columns: ["linked_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_knowledge_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_knowledge_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_knowledge_links_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_knowledge_links_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_lifecycle_events: {
        Row: {
          actor_profile_id: string | null
          created_at: string
          event_key: string
          from_status: string | null
          history_batch_id: string | null
          id: string
          metadata: Json
          organization_id: string
          reason: string | null
          tenant_id: string | null
          ticket_id: string
          to_status: string | null
        }
        Insert: {
          actor_profile_id?: string | null
          created_at?: string
          event_key: string
          from_status?: string | null
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          organization_id: string
          reason?: string | null
          tenant_id?: string | null
          ticket_id: string
          to_status?: string | null
        }
        Update: {
          actor_profile_id?: string | null
          created_at?: string
          event_key?: string
          from_status?: string | null
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          organization_id?: string
          reason?: string | null
          tenant_id?: string | null
          ticket_id?: string
          to_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_lifecycle_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_lifecycle_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_lifecycle_events_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_lifecycle_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_lifecycle_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_lifecycle_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_lifecycle_events_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_notes: {
        Row: {
          author_profile_id: string | null
          body: string
          created_at: string
          id: string
          note_type: string
          restricted: boolean
          ticket_id: string
        }
        Insert: {
          author_profile_id?: string | null
          body: string
          created_at?: string
          id?: string
          note_type?: string
          restricted?: boolean
          ticket_id: string
        }
        Update: {
          author_profile_id?: string | null
          body?: string
          created_at?: string
          id?: string
          note_type?: string
          restricted?: boolean
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_notes_author_profile_id_fkey"
            columns: ["author_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_notes_author_profile_id_fkey"
            columns: ["author_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_notes_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_offers: {
        Row: {
          id: string
          offer_status: string
          offered_at: string
          offered_to_profile_id: string
          responded_at: string | null
          response_note: string | null
          ticket_id: string
        }
        Insert: {
          id?: string
          offer_status?: string
          offered_at?: string
          offered_to_profile_id: string
          responded_at?: string | null
          response_note?: string | null
          ticket_id: string
        }
        Update: {
          id?: string
          offer_status?: string
          offered_at?: string
          offered_to_profile_id?: string
          responded_at?: string | null
          response_note?: string | null
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_offers_offered_to_profile_id_fkey"
            columns: ["offered_to_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_offers_offered_to_profile_id_fkey"
            columns: ["offered_to_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_offers_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_sla_clock_events: {
        Row: {
          actor_profile_id: string | null
          event_type: string
          history_batch_id: string | null
          id: string
          metadata: Json
          occurred_at: string
          organization_id: string
          tenant_id: string | null
          ticket_id: string
        }
        Insert: {
          actor_profile_id?: string | null
          event_type: string
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          occurred_at?: string
          organization_id: string
          tenant_id?: string | null
          ticket_id: string
        }
        Update: {
          actor_profile_id?: string | null
          event_type?: string
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          occurred_at?: string
          organization_id?: string
          tenant_id?: string | null
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_sla_clock_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_sla_clock_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_sla_clock_events_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_sla_clock_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_sla_clock_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_sla_clock_events_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_sla_policies: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          is_default_seed: boolean
          organization_id: string | null
          pause_resolution_while_waiting_requester: boolean
          priority: Database["public"]["Enums"]["ticket_priority"]
          resolution_target_minutes: number
          response_target_minutes: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          is_default_seed?: boolean
          organization_id?: string | null
          pause_resolution_while_waiting_requester?: boolean
          priority: Database["public"]["Enums"]["ticket_priority"]
          resolution_target_minutes: number
          response_target_minutes: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          is_default_seed?: boolean
          organization_id?: string | null
          pause_resolution_while_waiting_requester?: boolean
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolution_target_minutes?: number
          response_target_minutes?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_sla_policies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_sla_policies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      ticket_steps: {
        Row: {
          completed_at: string | null
          completed_by: string | null
          id: string
          instructions: string | null
          result: Json
          step_number: number
          step_status: string
          ticket_id: string
          title: string
        }
        Insert: {
          completed_at?: string | null
          completed_by?: string | null
          id?: string
          instructions?: string | null
          result?: Json
          step_number: number
          step_status?: string
          ticket_id: string
          title: string
        }
        Update: {
          completed_at?: string | null
          completed_by?: string | null
          id?: string
          instructions?: string | null
          result?: Json
          step_number?: number
          step_status?: string
          ticket_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_steps_completed_by_fkey"
            columns: ["completed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_steps_completed_by_fkey"
            columns: ["completed_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_steps_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_workflow_links: {
        Row: {
          context: Json
          created_at: string
          id: string
          linked_by_profile_id: string | null
          organization_id: string
          status: string
          tenant_id: string
          ticket_id: string
          updated_at: string
          workflow_id: string
          workflow_run_id: string | null
        }
        Insert: {
          context?: Json
          created_at?: string
          id?: string
          linked_by_profile_id?: string | null
          organization_id: string
          status?: string
          tenant_id: string
          ticket_id: string
          updated_at?: string
          workflow_id: string
          workflow_run_id?: string | null
        }
        Update: {
          context?: Json
          created_at?: string
          id?: string
          linked_by_profile_id?: string | null
          organization_id?: string
          status?: string
          tenant_id?: string
          ticket_id?: string
          updated_at?: string
          workflow_id?: string
          workflow_run_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_workflow_links_linked_by_profile_id_fkey"
            columns: ["linked_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_workflow_links_linked_by_profile_id_fkey"
            columns: ["linked_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "ticket_workflow_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_workflow_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "ticket_workflow_links_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_workflow_links_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_workflow_links_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_workflow_links_workflow_run_id_fkey"
            columns: ["workflow_run_id"]
            isOneToOne: false
            referencedRelation: "workflow_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          assigned_profile_id: string | null
          assigned_workforce_person_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string
          current_step: number
          department_id: string | null
          description: string
          first_response_at: string | null
          history_batch_id: string | null
          id: string
          opened_at: string
          organization_id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id: string | null
          requester_wait_seconds: number
          requester_wait_started_at: string | null
          requester_workforce_person_id: string | null
          resolution_breached_at: string | null
          resolution_due_at: string | null
          resolution_summary: string | null
          resolved_at: string | null
          response_breached_at: string | null
          response_due_at: string | null
          sla_policy_id: string | null
          source: string
          status: Database["public"]["Enums"]["ticket_status"]
          tenant_id: string | null
          ticket_number: number
          title: string
          total_steps: number | null
          updated_at: string
          waiting_on: string
        }
        Insert: {
          assigned_profile_id?: string | null
          assigned_workforce_person_id?: string | null
          category?: string | null
          closed_at?: string | null
          created_at?: string
          current_step?: number
          department_id?: string | null
          description?: string
          first_response_at?: string | null
          history_batch_id?: string | null
          id?: string
          opened_at?: string
          organization_id: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id?: string | null
          requester_wait_seconds?: number
          requester_wait_started_at?: string | null
          requester_workforce_person_id?: string | null
          resolution_breached_at?: string | null
          resolution_due_at?: string | null
          resolution_summary?: string | null
          resolved_at?: string | null
          response_breached_at?: string | null
          response_due_at?: string | null
          sla_policy_id?: string | null
          source?: string
          status?: Database["public"]["Enums"]["ticket_status"]
          tenant_id?: string | null
          ticket_number?: never
          title: string
          total_steps?: number | null
          updated_at?: string
          waiting_on?: string
        }
        Update: {
          assigned_profile_id?: string | null
          assigned_workforce_person_id?: string | null
          category?: string | null
          closed_at?: string | null
          created_at?: string
          current_step?: number
          department_id?: string | null
          description?: string
          first_response_at?: string | null
          history_batch_id?: string | null
          id?: string
          opened_at?: string
          organization_id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id?: string | null
          requester_wait_seconds?: number
          requester_wait_started_at?: string | null
          requester_workforce_person_id?: string | null
          resolution_breached_at?: string | null
          resolution_due_at?: string | null
          resolution_summary?: string | null
          resolved_at?: string | null
          response_breached_at?: string | null
          response_due_at?: string | null
          sla_policy_id?: string | null
          source?: string
          status?: Database["public"]["Enums"]["ticket_status"]
          tenant_id?: string | null
          ticket_number?: never
          title?: string
          total_steps?: number | null
          updated_at?: string
          waiting_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "tickets_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "tickets_assigned_workforce_person_id_fkey"
            columns: ["assigned_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "tickets_assigned_workforce_person_id_fkey"
            columns: ["assigned_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "tickets_requester_profile_id_fkey"
            columns: ["requester_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_requester_profile_id_fkey"
            columns: ["requester_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "tickets_requester_workforce_person_id_fkey"
            columns: ["requester_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "tickets_requester_workforce_person_id_fkey"
            columns: ["requester_workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_sla_policy_id_fkey"
            columns: ["sla_policy_id"]
            isOneToOne: false
            referencedRelation: "ticket_sla_policies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      work_assignments: {
        Row: {
          accepted_at: string | null
          agreed_pay: number | null
          application_id: string | null
          candidate_profile_id: string
          company_id: string
          end_at: string | null
          id: string
          job_posting_id: string
          offered_at: string
          pay_currency: string
          pay_period: string
          start_at: string | null
          status: string
        }
        Insert: {
          accepted_at?: string | null
          agreed_pay?: number | null
          application_id?: string | null
          candidate_profile_id: string
          company_id: string
          end_at?: string | null
          id?: string
          job_posting_id: string
          offered_at?: string
          pay_currency?: string
          pay_period?: string
          start_at?: string | null
          status?: string
        }
        Update: {
          accepted_at?: string | null
          agreed_pay?: number | null
          application_id?: string | null
          candidate_profile_id?: string
          company_id?: string
          end_at?: string | null
          id?: string
          job_posting_id?: string
          offered_at?: string
          pay_currency?: string
          pay_period?: string
          start_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "work_assignments_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "job_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_assignments_candidate_profile_id_fkey"
            columns: ["candidate_profile_id"]
            isOneToOne: false
            referencedRelation: "candidate_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "marketplace_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "work_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_financial_period_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "work_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "work_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "work_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["company_id"]
          },
          {
            foreignKeyName: "work_assignments_job_posting_id_fkey"
            columns: ["job_posting_id"]
            isOneToOne: false
            referencedRelation: "job_postings"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_run_checkpoints: {
        Row: {
          checkpoint_key: string
          checkpoint_version: number
          created_at: string
          created_by: string | null
          id: string
          organization_id: string | null
          state_snapshot: Json
          tenant_id: string | null
          workflow_run_id: string
        }
        Insert: {
          checkpoint_key: string
          checkpoint_version?: number
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string | null
          state_snapshot: Json
          tenant_id?: string | null
          workflow_run_id: string
        }
        Update: {
          checkpoint_key?: string
          checkpoint_version?: number
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string | null
          state_snapshot?: Json
          tenant_id?: string | null
          workflow_run_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_run_checkpoints_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_run_checkpoints_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workflow_run_checkpoints_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_run_checkpoints_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workflow_run_checkpoints_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_run_checkpoints_workflow_run_id_fkey"
            columns: ["workflow_run_id"]
            isOneToOne: false
            referencedRelation: "workflow_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_run_events: {
        Row: {
          actor_profile_id: string | null
          correlation_id: string | null
          event_key: string
          event_payload: Json
          id: string
          occurred_at: string
          organization_id: string | null
          request_id: string | null
          tenant_id: string | null
          workflow_run_id: string
        }
        Insert: {
          actor_profile_id?: string | null
          correlation_id?: string | null
          event_key: string
          event_payload?: Json
          id?: string
          occurred_at?: string
          organization_id?: string | null
          request_id?: string | null
          tenant_id?: string | null
          workflow_run_id: string
        }
        Update: {
          actor_profile_id?: string | null
          correlation_id?: string | null
          event_key?: string
          event_payload?: Json
          id?: string
          occurred_at?: string
          organization_id?: string | null
          request_id?: string | null
          tenant_id?: string | null
          workflow_run_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_run_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_run_events_actor_profile_id_fkey"
            columns: ["actor_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workflow_run_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_run_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workflow_run_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_run_events_workflow_run_id_fkey"
            columns: ["workflow_run_id"]
            isOneToOne: false
            referencedRelation: "workflow_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_runs: {
        Row: {
          completed_at: string | null
          current_step: number
          id: string
          organization_id: string | null
          run_context: Json
          run_status: string
          started_at: string
          started_by: string | null
          tenant_id: string | null
          workflow_id: string
        }
        Insert: {
          completed_at?: string | null
          current_step?: number
          id?: string
          organization_id?: string | null
          run_context?: Json
          run_status?: string
          started_at?: string
          started_by?: string | null
          tenant_id?: string | null
          workflow_id: string
        }
        Update: {
          completed_at?: string | null
          current_step?: number
          id?: string
          organization_id?: string | null
          run_context?: Json
          run_status?: string
          started_at?: string
          started_by?: string | null
          tenant_id?: string | null
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workflow_runs_started_by_fkey"
            columns: ["started_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_runs_started_by_fkey"
            columns: ["started_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workflow_runs_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_runs_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_step_runs: {
        Row: {
          assigned_profile_id: string | null
          attempt_count: number
          completed_at: string | null
          created_at: string
          error_code: string | null
          error_message: string | null
          id: string
          input_snapshot: Json
          max_attempts: number
          next_attempt_at: string | null
          organization_id: string | null
          output_snapshot: Json
          started_at: string | null
          step_key: string
          step_order: number
          step_status: string
          tenant_id: string | null
          updated_at: string
          workflow_run_id: string
        }
        Insert: {
          assigned_profile_id?: string | null
          attempt_count?: number
          completed_at?: string | null
          created_at?: string
          error_code?: string | null
          error_message?: string | null
          id?: string
          input_snapshot?: Json
          max_attempts?: number
          next_attempt_at?: string | null
          organization_id?: string | null
          output_snapshot?: Json
          started_at?: string | null
          step_key: string
          step_order: number
          step_status?: string
          tenant_id?: string | null
          updated_at?: string
          workflow_run_id: string
        }
        Update: {
          assigned_profile_id?: string | null
          attempt_count?: number
          completed_at?: string | null
          created_at?: string
          error_code?: string | null
          error_message?: string | null
          id?: string
          input_snapshot?: Json
          max_attempts?: number
          next_attempt_at?: string | null
          organization_id?: string | null
          output_snapshot?: Json
          started_at?: string | null
          step_key?: string
          step_order?: number
          step_status?: string
          tenant_id?: string | null
          updated_at?: string
          workflow_run_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_step_runs_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_step_runs_assigned_profile_id_fkey"
            columns: ["assigned_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workflow_step_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_step_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workflow_step_runs_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_step_runs_workflow_run_id_fkey"
            columns: ["workflow_run_id"]
            isOneToOne: false
            referencedRelation: "workflow_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_versions: {
        Row: {
          created_at: string
          created_by: string | null
          definition: Json
          definition_sha256: string | null
          id: string
          organization_id: string | null
          publication_status: string
          published_at: string | null
          published_by: string | null
          tenant_id: string | null
          version: number
          workflow_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          definition: Json
          definition_sha256?: string | null
          id?: string
          organization_id?: string | null
          publication_status?: string
          published_at?: string | null
          published_by?: string | null
          tenant_id?: string | null
          version: number
          workflow_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          definition?: Json
          definition_sha256?: string | null
          id?: string
          organization_id?: string | null
          publication_status?: string
          published_at?: string | null
          published_by?: string | null
          tenant_id?: string | null
          version?: number
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_versions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_versions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workflow_versions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_versions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workflow_versions_published_by_fkey"
            columns: ["published_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_versions_published_by_fkey"
            columns: ["published_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workflow_versions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_versions_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflows: {
        Row: {
          created_at: string
          created_by: string | null
          definition: Json
          description: string | null
          id: string
          name: string
          organization_id: string | null
          status: string
          tenant_id: string | null
          updated_at: string
          version: number
          workflow_key: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          definition?: Json
          description?: string | null
          id?: string
          name: string
          organization_id?: string | null
          status?: string
          tenant_id?: string | null
          updated_at?: string
          version?: number
          workflow_key: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          definition?: Json
          description?: string | null
          id?: string
          name?: string
          organization_id?: string | null
          status?: string
          tenant_id?: string | null
          updated_at?: string
          version?: number
          workflow_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflows_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflows_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workflows_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflows_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workflows_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_documents: {
        Row: {
          candidate_id: string | null
          content_markdown: string
          created_at: string
          document_number: string
          document_status: string
          document_type: string
          effective_date: string | null
          expires_at: string | null
          history_batch_id: string | null
          id: string
          issued_by_person_id: string | null
          metadata: Json
          module_key: string
          organization_id: string
          staffing_assignment_id: string | null
          title: string
          workforce_person_id: string | null
        }
        Insert: {
          candidate_id?: string | null
          content_markdown: string
          created_at?: string
          document_number: string
          document_status: string
          document_type: string
          effective_date?: string | null
          expires_at?: string | null
          history_batch_id?: string | null
          id?: string
          issued_by_person_id?: string | null
          metadata?: Json
          module_key: string
          organization_id: string
          staffing_assignment_id?: string | null
          title: string
          workforce_person_id?: string | null
        }
        Update: {
          candidate_id?: string | null
          content_markdown?: string
          created_at?: string
          document_number?: string
          document_status?: string
          document_type?: string
          effective_date?: string | null
          expires_at?: string | null
          history_batch_id?: string | null
          id?: string
          issued_by_person_id?: string | null
          metadata?: Json
          module_key?: string
          organization_id?: string
          staffing_assignment_id?: string | null
          title?: string
          workforce_person_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workforce_documents_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "intellihire_candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_documents_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_documents_issued_by_person_id_fkey"
            columns: ["issued_by_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_documents_issued_by_person_id_fkey"
            columns: ["issued_by_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_documents_staffing_assignment_id_fkey"
            columns: ["staffing_assignment_id"]
            isOneToOne: false
            referencedRelation: "workforce_staffing_assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_documents_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_documents_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_employment_events: {
        Row: {
          compensation_amount: number | null
          created_at: string
          currency: string
          event_date: string
          event_number: string
          event_type: string
          history_batch_id: string | null
          id: string
          metadata: Json
          new_department_id: string | null
          new_status: string | null
          new_title: string | null
          notes: string | null
          organization_id: string
          previous_department_id: string | null
          previous_status: string | null
          previous_title: string | null
          workforce_person_id: string
        }
        Insert: {
          compensation_amount?: number | null
          created_at?: string
          currency?: string
          event_date: string
          event_number: string
          event_type: string
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          new_department_id?: string | null
          new_status?: string | null
          new_title?: string | null
          notes?: string | null
          organization_id: string
          previous_department_id?: string | null
          previous_status?: string | null
          previous_title?: string | null
          workforce_person_id: string
        }
        Update: {
          compensation_amount?: number | null
          created_at?: string
          currency?: string
          event_date?: string
          event_number?: string
          event_type?: string
          history_batch_id?: string | null
          id?: string
          metadata?: Json
          new_department_id?: string | null
          new_status?: string | null
          new_title?: string | null
          notes?: string | null
          organization_id?: string
          previous_department_id?: string | null
          previous_status?: string | null
          previous_title?: string | null
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_employment_events_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_employment_events_new_department_id_fkey"
            columns: ["new_department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_employment_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_employment_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_employment_events_previous_department_id_fkey"
            columns: ["previous_department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_employment_events_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_employment_events_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_group_memberships: {
        Row: {
          created_at: string
          group_id: string
          id: string
          membership_source: string
          workforce_person_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          id?: string
          membership_source?: string
          workforce_person_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          id?: string
          membership_source?: string
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_group_memberships_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_group_memberships_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_group_memberships_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_license_assignments: {
        Row: {
          assigned_at: string
          assignment_source: string
          assignment_status: string
          expires_at: string | null
          id: string
          license_sku_id: string
          organization_id: string
          tenant_id: string
          workforce_person_id: string
        }
        Insert: {
          assigned_at?: string
          assignment_source?: string
          assignment_status?: string
          expires_at?: string | null
          id?: string
          license_sku_id: string
          organization_id: string
          tenant_id: string
          workforce_person_id: string
        }
        Update: {
          assigned_at?: string
          assignment_source?: string
          assignment_status?: string
          expires_at?: string | null
          id?: string
          license_sku_id?: string
          organization_id?: string
          tenant_id?: string
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_license_assignments_license_sku_id_fkey"
            columns: ["license_sku_id"]
            isOneToOne: false
            referencedRelation: "license_skus"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_license_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_license_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_license_assignments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_license_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_license_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_management_assignment_locations: {
        Row: {
          created_at: string
          created_by_profile_id: string | null
          id: string
          location_organization_id: string
          management_assignment_id: string
          tenant_id: string
        }
        Insert: {
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          location_organization_id: string
          management_assignment_id: string
          tenant_id: string
        }
        Update: {
          created_at?: string
          created_by_profile_id?: string | null
          id?: string
          location_organization_id?: string
          management_assignment_id?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_management_assignment_l_location_organization_id_fkey"
            columns: ["location_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignment_l_location_organization_id_fkey"
            columns: ["location_organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_management_assignment_l_management_assignment_id_fkey"
            columns: ["management_assignment_id"]
            isOneToOne: false
            referencedRelation: "workforce_management_assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignment_loca_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignment_loca_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workforce_management_assignment_locations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_management_assignments: {
        Row: {
          approved_at: string | null
          approved_by_profile_id: string | null
          assignment_reason: string
          authorization_enabled: boolean
          created_at: string
          created_by_profile_id: string | null
          department_id: string | null
          ends_at: string | null
          id: string
          management_role_key: string
          metadata: Json
          organization_id: string
          region_id: string | null
          scope_type: string
          starts_at: string
          status: string
          tenant_id: string | null
          updated_at: string
          workforce_person_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          assignment_reason: string
          authorization_enabled?: boolean
          created_at?: string
          created_by_profile_id?: string | null
          department_id?: string | null
          ends_at?: string | null
          id?: string
          management_role_key: string
          metadata?: Json
          organization_id: string
          region_id?: string | null
          scope_type: string
          starts_at?: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
          workforce_person_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          assignment_reason?: string
          authorization_enabled?: boolean
          created_at?: string
          created_by_profile_id?: string | null
          department_id?: string | null
          ends_at?: string | null
          id?: string
          management_role_key?: string
          metadata?: Json
          organization_id?: string
          region_id?: string | null
          scope_type?: string
          starts_at?: string
          status?: string
          tenant_id?: string | null
          updated_at?: string
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_management_assignments_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_created_by_profile_id_fkey"
            columns: ["created_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_management_role_key_fkey"
            columns: ["management_role_key"]
            isOneToOne: false
            referencedRelation: "governance_management_role_catalog"
            referencedColumns: ["role_key"]
          },
          {
            foreignKeyName: "workforce_management_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "governance_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_management_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_organization_memberships: {
        Row: {
          approved_at: string | null
          approved_by_profile_id: string | null
          created_at: string
          ends_at: string | null
          id: string
          membership_type: string
          notes: string | null
          organization_id: string
          source: string
          starts_at: string
          status: string
          workforce_person_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          created_at?: string
          ends_at?: string | null
          id?: string
          membership_type: string
          notes?: string | null
          organization_id: string
          source?: string
          starts_at?: string
          status?: string
          workforce_person_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by_profile_id?: string | null
          created_at?: string
          ends_at?: string | null
          id?: string
          membership_type?: string
          notes?: string | null
          organization_id?: string
          source?: string
          starts_at?: string
          status?: string
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_organization_memberships_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_organization_memberships_approved_by_profile_id_fkey"
            columns: ["approved_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workforce_organization_memberships_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_organization_memberships_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_organization_memberships_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_organization_memberships_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_organizational_units: {
        Row: {
          created_at: string
          description: string | null
          distinguished_path: string
          id: string
          name: string
          organization_id: string
          ou_key: string
          parent_unit_id: string | null
          tenant_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          distinguished_path: string
          id?: string
          name: string
          organization_id: string
          ou_key: string
          parent_unit_id?: string | null
          tenant_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          distinguished_path?: string
          id?: string
          name?: string
          organization_id?: string
          ou_key?: string
          parent_unit_id?: string | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_organizational_units_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_organizational_units_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_organizational_units_parent_unit_id_fkey"
            columns: ["parent_unit_id"]
            isOneToOne: false
            referencedRelation: "workforce_organizational_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_organizational_units_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_people: {
        Row: {
          company_id: string
          country_code: string
          created_at: string
          department_id: string
          directory_object_id: string | null
          directory_provider: string | null
          directory_sync_status: string
          directory_upn: string | null
          display_name: string
          employee_id: string
          employment_status: string
          employment_type: string
          first_name: string
          global_person_id: string
          history_batch_id: string | null
          id: string
          identity_source: string
          is_synthetic: boolean
          job_level: string
          job_title: string
          last_name: string
          location_city: string
          location_region: string
          manager_person_id: string | null
          organization_id: string
          tenant_id: string
          timezone: string
          updated_at: string
          work_email: string
          work_phone: string
          workforce_ou_id: string | null
        }
        Insert: {
          company_id: string
          country_code?: string
          created_at?: string
          department_id: string
          directory_object_id?: string | null
          directory_provider?: string | null
          directory_sync_status?: string
          directory_upn?: string | null
          display_name: string
          employee_id: string
          employment_status?: string
          employment_type?: string
          first_name: string
          global_person_id: string
          history_batch_id?: string | null
          id?: string
          identity_source?: string
          is_synthetic?: boolean
          job_level: string
          job_title: string
          last_name: string
          location_city: string
          location_region: string
          manager_person_id?: string | null
          organization_id: string
          tenant_id: string
          timezone?: string
          updated_at?: string
          work_email: string
          work_phone: string
          workforce_ou_id?: string | null
        }
        Update: {
          company_id?: string
          country_code?: string
          created_at?: string
          department_id?: string
          directory_object_id?: string | null
          directory_provider?: string | null
          directory_sync_status?: string
          directory_upn?: string | null
          display_name?: string
          employee_id?: string
          employment_status?: string
          employment_type?: string
          first_name?: string
          global_person_id?: string
          history_batch_id?: string | null
          id?: string
          identity_source?: string
          is_synthetic?: boolean
          job_level?: string
          job_title?: string
          last_name?: string
          location_city?: string
          location_region?: string
          manager_person_id?: string | null
          organization_id?: string
          tenant_id?: string
          timezone?: string
          updated_at?: string
          work_email?: string
          work_phone?: string
          workforce_ou_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workforce_people_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_people_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_people_manager_person_id_fkey"
            columns: ["manager_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_people_manager_person_id_fkey"
            columns: ["manager_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_people_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_people_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_people_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_people_workforce_ou_id_fkey"
            columns: ["workforce_ou_id"]
            isOneToOne: false
            referencedRelation: "workforce_organizational_units"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_profile_identity_links: {
        Row: {
          created_at: string
          id: string
          link_method: string
          link_status: string
          organization_id: string
          profile_id: string
          reason: string
          revoked_at: string | null
          revoked_by_profile_id: string | null
          tenant_id: string
          updated_at: string
          verified_at: string | null
          verified_by_profile_id: string | null
          workforce_person_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          link_method?: string
          link_status?: string
          organization_id: string
          profile_id: string
          reason?: string
          revoked_at?: string | null
          revoked_by_profile_id?: string | null
          tenant_id: string
          updated_at?: string
          verified_at?: string | null
          verified_by_profile_id?: string | null
          workforce_person_id: string
        }
        Update: {
          created_at?: string
          id?: string
          link_method?: string
          link_status?: string
          organization_id?: string
          profile_id?: string
          reason?: string
          revoked_at?: string | null
          revoked_by_profile_id?: string | null
          tenant_id?: string
          updated_at?: string
          verified_at?: string | null
          verified_by_profile_id?: string | null
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_profile_identity_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_revoked_by_profile_id_fkey"
            columns: ["revoked_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_revoked_by_profile_id_fkey"
            columns: ["revoked_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_verified_by_profile_id_fkey"
            columns: ["verified_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_verified_by_profile_id_fkey"
            columns: ["verified_by_profile_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: true
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_profile_identity_links_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: true
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_role_assignments: {
        Row: {
          assigned_at: string
          assignment_scope: string
          id: string
          is_active: boolean
          is_primary: boolean
          organization_id: string
          role_id: string
          tenant_id: string
          workforce_person_id: string
        }
        Insert: {
          assigned_at?: string
          assignment_scope?: string
          id?: string
          is_active?: boolean
          is_primary?: boolean
          organization_id: string
          role_id: string
          tenant_id: string
          workforce_person_id: string
        }
        Update: {
          assigned_at?: string
          assignment_scope?: string
          id?: string
          is_active?: boolean
          is_primary?: boolean
          organization_id?: string
          role_id?: string
          tenant_id?: string
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_role_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_role_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_role_assignments_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_role_assignments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_role_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_role_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_software_assignments: {
        Row: {
          access_scope: string
          assigned_at: string
          assignment_source: string
          assignment_status: string
          created_at: string
          external_provider_key: string | null
          id: string
          internal_app_id: string | null
          metadata: Json
          organization_id: string
          tenant_id: string
          workforce_person_id: string
        }
        Insert: {
          access_scope?: string
          assigned_at?: string
          assignment_source?: string
          assignment_status?: string
          created_at?: string
          external_provider_key?: string | null
          id?: string
          internal_app_id?: string | null
          metadata?: Json
          organization_id: string
          tenant_id: string
          workforce_person_id: string
        }
        Update: {
          access_scope?: string
          assigned_at?: string
          assignment_source?: string
          assignment_status?: string
          created_at?: string
          external_provider_key?: string | null
          id?: string
          internal_app_id?: string | null
          metadata?: Json
          organization_id?: string
          tenant_id?: string
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_software_assignments_external_provider_key_fkey"
            columns: ["external_provider_key"]
            isOneToOne: false
            referencedRelation: "integration_provider_catalog"
            referencedColumns: ["provider_key"]
          },
          {
            foreignKeyName: "workforce_software_assignments_internal_app_id_fkey"
            columns: ["internal_app_id"]
            isOneToOne: false
            referencedRelation: "intellisphere_apps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_software_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_software_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_software_assignments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_software_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_software_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_staffing_assignments: {
        Row: {
          assignment_number: string
          assignment_status: string
          assignment_type: string
          bill_rate: number | null
          created_at: string
          currency: string
          customer_account_id: string
          ends_at: string | null
          history_batch_id: string | null
          hourly_rate: number | null
          id: string
          metadata: Json
          notes: string | null
          organization_id: string
          project_name: string
          role_title: string
          starts_at: string
          supervisor_person_id: string | null
          workforce_person_id: string
        }
        Insert: {
          assignment_number: string
          assignment_status: string
          assignment_type: string
          bill_rate?: number | null
          created_at?: string
          currency?: string
          customer_account_id: string
          ends_at?: string | null
          history_batch_id?: string | null
          hourly_rate?: number | null
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id: string
          project_name: string
          role_title: string
          starts_at: string
          supervisor_person_id?: string | null
          workforce_person_id: string
        }
        Update: {
          assignment_number?: string
          assignment_status?: string
          assignment_type?: string
          bill_rate?: number | null
          created_at?: string
          currency?: string
          customer_account_id?: string
          ends_at?: string | null
          history_batch_id?: string | null
          hourly_rate?: number | null
          id?: string
          metadata?: Json
          notes?: string | null
          organization_id?: string
          project_name?: string
          role_title?: string
          starts_at?: string
          supervisor_person_id?: string | null
          workforce_person_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workforce_staffing_assignments_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "marketplace_customer_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_business_financial_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_invoice_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_subscription_status_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_customer_account_id_fkey"
            columns: ["customer_account_id"]
            isOneToOne: false
            referencedRelation: "v_company_transaction_category_summary"
            referencedColumns: ["customer_account_id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_history_batch_id_fkey"
            columns: ["history_batch_id"]
            isOneToOne: false
            referencedRelation: "company_history_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_supervisor_person_id_fkey"
            columns: ["supervisor_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_supervisor_person_id_fkey"
            columns: ["supervisor_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_staffing_assignments_workforce_person_id_fkey"
            columns: ["workforce_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      v_company_business_financial_summary: {
        Row: {
          account_manager_name: string | null
          account_manager_person_id: string | null
          account_number: string | null
          account_status: string | null
          active_arr: number | null
          active_mrr: number | null
          active_subscription_count: number | null
          balance_due_total: number | null
          cancelled_subscription_count: number | null
          company_id: string | null
          company_name: string | null
          company_organization_name: string | null
          company_size: string | null
          contact_count: number | null
          customer_account_id: string | null
          customer_since: string | null
          expired_subscription_count: number | null
          headquarters_city: string | null
          headquarters_region: string | null
          industry: string | null
          invoice_count: number | null
          invoiced_total: number | null
          last_invoice_date: string | null
          last_revenue_date: string | null
          last_sale_date: string | null
          latest_next_billing_date: string | null
          legal_name: string | null
          organization_id: string | null
          overdue_invoice_count: number | null
          paid_total: number | null
          past_due_subscription_count: number | null
          paused_subscription_count: number | null
          primary_contact_count: number | null
          recognized_revenue: number | null
          revenue_transaction_count: number | null
          sale_count: number | null
          sales_total: number | null
          subscription_count: number | null
          tenant_id: string | null
          tenant_name: string | null
          verification_status: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_companies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_companies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "marketplace_companies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_account_manager_person_id_fkey"
            columns: ["account_manager_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "marketplace_customer_accounts_account_manager_person_id_fkey"
            columns: ["account_manager_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
        ]
      }
      v_company_financial_period_summary: {
        Row: {
          company_id: string | null
          company_name: string | null
          customer_account_id: string | null
          fiscal_quarter: number | null
          fiscal_year: number | null
          invoice_count: number | null
          invoiced_total: number | null
          paid_total: number | null
          period_month: string | null
          receivables: number | null
          recognized_revenue: number | null
          revenue_transactions: number | null
          sale_count: number | null
          sales_total: number | null
          tenant_id: string | null
          tenant_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_companies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      v_company_invoice_status_summary: {
        Row: {
          account_number: string | null
          balance_due_total: number | null
          company_id: string | null
          company_name: string | null
          currency: string | null
          customer_account_id: string | null
          earliest_due_at: string | null
          first_issued_at: string | null
          invoice_count: number | null
          invoice_status: string | null
          invoice_total: number | null
          last_issued_at: string | null
          latest_due_at: string | null
          paid_total: number | null
          subtotal: number | null
          tax_total: number | null
          tenant_id: string | null
          tenant_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_companies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      v_company_subscription_status_summary: {
        Row: {
          account_number: string | null
          billing_cycle: string | null
          company_id: string | null
          company_name: string | null
          customer_account_id: string | null
          first_start_date: string | null
          latest_cancelled_date: string | null
          latest_start_date: string | null
          monthly_amount_total: number | null
          next_billing_date: string | null
          plan_key: string | null
          status: string | null
          subscription_count: number | null
          tenant_id: string | null
          tenant_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_companies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      v_company_transaction_category_summary: {
        Row: {
          account_number: string | null
          category: string | null
          company_id: string | null
          company_name: string | null
          currency: string | null
          customer_account_id: string | null
          first_transaction_date: string | null
          last_transaction_date: string | null
          tenant_id: string | null
          tenant_name: string | null
          transaction_count: number | null
          transaction_status: string | null
          transaction_total: number | null
          transaction_type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_companies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      v_executive_financial_summary: {
        Row: {
          active_arr: number | null
          active_customer_account_count: number | null
          active_mrr: number | null
          active_people_count: number | null
          active_profile_count: number | null
          active_subscription_count: number | null
          customer_account_count: number | null
          expenses_lifetime: number | null
          expenses_ytd: number | null
          invoice_count: number | null
          invoiced_total: number | null
          net_income_lifetime: number | null
          net_income_ytd: number | null
          organization_id: string | null
          organization_name: string | null
          outstanding_receivables: number | null
          overdue_invoice_count: number | null
          paid_total: number | null
          revenue_lifetime: number | null
          revenue_ytd: number | null
          sale_count: number | null
          sales_total: number | null
          tenant_count: number | null
          total_people_count: number | null
        }
        Relationships: []
      }
      v_executive_workspace_metrics: {
        Row: {
          metric_key: string | null
          metric_unit: string | null
          metric_value: number | null
          source_table: string | null
          workspace_role: string | null
        }
        Relationships: []
      }
      v_financial_expense_category_summary: {
        Row: {
          category: string | null
          expense_total: number | null
          fiscal_year_start: string | null
          organization_id: string | null
          organization_name: string | null
          period_month: string | null
          transaction_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "company_financial_transactions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_financial_transactions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      v_financial_period_summary: {
        Row: {
          expense_transactions: number | null
          expenses: number | null
          fiscal_quarter: number | null
          fiscal_year: number | null
          invoice_count: number | null
          invoiced_total: number | null
          net_income: number | null
          organization_id: string | null
          organization_name: string | null
          paid_total: number | null
          period_month: string | null
          receivables: number | null
          revenue: number | null
          revenue_transactions: number | null
          sale_count: number | null
          sales_total: number | null
        }
        Relationships: []
      }
      v_tenant_business_financial_summary: {
        Row: {
          active_arr: number | null
          active_customer_accounts: number | null
          active_mrr: number | null
          active_subscription_count: number | null
          balance_due_total: number | null
          cancelled_subscription_count: number | null
          company_count: number | null
          contact_count: number | null
          customer_account_count: number | null
          expired_subscription_count: number | null
          invoice_count: number | null
          invoiced_total: number | null
          overdue_invoice_count: number | null
          paid_total: number | null
          past_due_subscription_count: number | null
          paused_subscription_count: number | null
          recognized_revenue: number | null
          revenue_transaction_count: number | null
          sale_count: number | null
          sales_total: number | null
          subscription_count: number | null
          tenant_id: string | null
          tenant_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_companies_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      v_workforce_identity_linkage: {
        Row: {
          display_name: string | null
          employee_id: string | null
          employment_status: string | null
          employment_type: string | null
          global_person_id: string | null
          has_application_profile: boolean | null
          job_level: string | null
          job_title: string | null
          manager_name: string | null
          manager_person_id: string | null
          organization_id: string | null
          organization_name: string | null
          profile_id: string | null
          profile_status: Database["public"]["Enums"]["member_status"] | null
          tenant_id: string | null
          tenant_name: string | null
          work_email: string | null
          workforce_person_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workforce_people_manager_person_id_fkey"
            columns: ["manager_person_id"]
            isOneToOne: false
            referencedRelation: "v_workforce_identity_linkage"
            referencedColumns: ["workforce_person_id"]
          },
          {
            foreignKeyName: "workforce_people_manager_person_id_fkey"
            columns: ["manager_person_id"]
            isOneToOne: false
            referencedRelation: "workforce_people"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_people_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_people_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "v_executive_financial_summary"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "workforce_people_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      accept_ticket: {
        Args: { p_ticket_id: string }
        Returns: {
          assigned_profile_id: string | null
          assigned_workforce_person_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string
          current_step: number
          department_id: string | null
          description: string
          first_response_at: string | null
          history_batch_id: string | null
          id: string
          opened_at: string
          organization_id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id: string | null
          requester_wait_seconds: number
          requester_wait_started_at: string | null
          requester_workforce_person_id: string | null
          resolution_breached_at: string | null
          resolution_due_at: string | null
          resolution_summary: string | null
          resolved_at: string | null
          response_breached_at: string | null
          response_due_at: string | null
          sla_policy_id: string | null
          source: string
          status: Database["public"]["Enums"]["ticket_status"]
          tenant_id: string | null
          ticket_number: number
          title: string
          total_steps: number | null
          updated_at: string
          waiting_on: string
        }
        SetofOptions: {
          from: "*"
          to: "tickets"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      admin_link_workforce_profile_identity: {
        Args: {
          p_profile_id: string
          p_reason: string
          p_workforce_person_id: string
        }
        Returns: string
      }
      admin_retire_device: {
        Args: { p_device_id: string; p_reason?: string }
        Returns: {
          acquisition_cost: number | null
          asset_class: string
          asset_tag: string | null
          assigned_at: string | null
          assigned_profile_id: string | null
          assignment_type: string
          building: string | null
          compliance_checked_at: string | null
          compliance_status: string
          created_at: string
          currency_code: string
          data_wipe_verified_at: string | null
          device_display_name: string | null
          device_name: string
          device_status: Database["public"]["Enums"]["asset_status"]
          device_type: string
          directory_join_type: string | null
          disposal_method: string | null
          domain_name: string | null
          encryption_status: string
          endpoint_protection_status: string
          enrollment_status: string
          firewall_status: string
          floor_label: string | null
          history_batch_id: string | null
          hostname: string | null
          id: string
          inventory: Json
          last_inventory_at: string | null
          last_seen_at: string | null
          lease_end_date: string | null
          location_name: string | null
          management_platform: string | null
          management_source: string | null
          manufacturer: string | null
          manufacturer_serial_hash: string | null
          memory_gb: number | null
          metadata: Json
          model: string | null
          next_review_at: string | null
          operating_system: string | null
          organization_id: string
          organizational_unit_id: string | null
          os_build: string | null
          os_version: string | null
          ownership_type: string
          privacy_scope: string
          processor: string | null
          purchase_date: string | null
          readable_device_id: string | null
          remote_lock_allowed: boolean
          remote_wipe_allowed: boolean
          retired_at: string | null
          room_label: string | null
          secure_boot_status: string
          serial_number: string | null
          storage_gb: number | null
          tenant_id: string | null
          updated_at: string
          warranty_expiration: string | null
          workforce_person_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "devices"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      admin_transfer_device: {
        Args: {
          p_assigned_profile_id?: string
          p_device_id: string
          p_notes?: string
          p_workforce_person_id?: string
        }
        Returns: {
          acquisition_cost: number | null
          asset_class: string
          asset_tag: string | null
          assigned_at: string | null
          assigned_profile_id: string | null
          assignment_type: string
          building: string | null
          compliance_checked_at: string | null
          compliance_status: string
          created_at: string
          currency_code: string
          data_wipe_verified_at: string | null
          device_display_name: string | null
          device_name: string
          device_status: Database["public"]["Enums"]["asset_status"]
          device_type: string
          directory_join_type: string | null
          disposal_method: string | null
          domain_name: string | null
          encryption_status: string
          endpoint_protection_status: string
          enrollment_status: string
          firewall_status: string
          floor_label: string | null
          history_batch_id: string | null
          hostname: string | null
          id: string
          inventory: Json
          last_inventory_at: string | null
          last_seen_at: string | null
          lease_end_date: string | null
          location_name: string | null
          management_platform: string | null
          management_source: string | null
          manufacturer: string | null
          manufacturer_serial_hash: string | null
          memory_gb: number | null
          metadata: Json
          model: string | null
          next_review_at: string | null
          operating_system: string | null
          organization_id: string
          organizational_unit_id: string | null
          os_build: string | null
          os_version: string | null
          ownership_type: string
          privacy_scope: string
          processor: string | null
          purchase_date: string | null
          readable_device_id: string | null
          remote_lock_allowed: boolean
          remote_wipe_allowed: boolean
          retired_at: string | null
          room_label: string | null
          secure_boot_status: string
          serial_number: string | null
          storage_gb: number | null
          tenant_id: string | null
          updated_at: string
          warranty_expiration: string | null
          workforce_person_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "devices"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      admin_update_device: {
        Args: {
          p_asset_tag?: string
          p_compliance_status?: string
          p_device_id: string
          p_device_name: string
          p_enrollment_status?: string
          p_location_name?: string
          p_management_platform?: string
          p_manufacturer?: string
          p_model?: string
          p_operating_system?: string
          p_os_version?: string
          p_serial_number?: string
        }
        Returns: {
          acquisition_cost: number | null
          asset_class: string
          asset_tag: string | null
          assigned_at: string | null
          assigned_profile_id: string | null
          assignment_type: string
          building: string | null
          compliance_checked_at: string | null
          compliance_status: string
          created_at: string
          currency_code: string
          data_wipe_verified_at: string | null
          device_display_name: string | null
          device_name: string
          device_status: Database["public"]["Enums"]["asset_status"]
          device_type: string
          directory_join_type: string | null
          disposal_method: string | null
          domain_name: string | null
          encryption_status: string
          endpoint_protection_status: string
          enrollment_status: string
          firewall_status: string
          floor_label: string | null
          history_batch_id: string | null
          hostname: string | null
          id: string
          inventory: Json
          last_inventory_at: string | null
          last_seen_at: string | null
          lease_end_date: string | null
          location_name: string | null
          management_platform: string | null
          management_source: string | null
          manufacturer: string | null
          manufacturer_serial_hash: string | null
          memory_gb: number | null
          metadata: Json
          model: string | null
          next_review_at: string | null
          operating_system: string | null
          organization_id: string
          organizational_unit_id: string | null
          os_build: string | null
          os_version: string | null
          ownership_type: string
          privacy_scope: string
          processor: string | null
          purchase_date: string | null
          readable_device_id: string | null
          remote_lock_allowed: boolean
          remote_wipe_allowed: boolean
          retired_at: string | null
          room_label: string | null
          secure_boot_status: string
          serial_number: string | null
          storage_gb: number | null
          tenant_id: string | null
          updated_at: string
          warranty_expiration: string | null
          workforce_person_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "devices"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      admin_update_organization: {
        Args: {
          p_name: string
          p_organization_code: string
          p_organization_id: string
          p_region: string
          p_status: string
        }
        Returns: {
          created_at: string
          id: string
          legal_name: string | null
          name: string
          organization_code: string
          organization_type: string
          parent_organization_id: string | null
          readable_company_id: string | null
          region: string | null
          settings: Json
          slug: string | null
          status: string
          updated_at: string
        }
        SetofOptions: {
          from: "*"
          to: "organizations"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      admin_update_tenant: {
        Args: {
          p_name: string
          p_slug: string
          p_status: string
          p_tenant_code: string
          p_tenant_id: string
        }
        Returns: {
          created_at: string
          id: string
          isolation_key: string
          name: string
          organization_id: string
          readable_tenant_id: string | null
          settings: Json
          slug: string
          status: string
          tenant_code: string
        }
        SetofOptions: {
          from: "*"
          to: "tenants"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      admin_update_ticket: {
        Args: {
          p_assigned_profile_id?: string
          p_priority: Database["public"]["Enums"]["ticket_priority"]
          p_reason?: string
          p_resolution_summary?: string
          p_status: Database["public"]["Enums"]["ticket_status"]
          p_ticket_id: string
        }
        Returns: {
          assigned_profile_id: string | null
          assigned_workforce_person_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string
          current_step: number
          department_id: string | null
          description: string
          first_response_at: string | null
          history_batch_id: string | null
          id: string
          opened_at: string
          organization_id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id: string | null
          requester_wait_seconds: number
          requester_wait_started_at: string | null
          requester_workforce_person_id: string | null
          resolution_breached_at: string | null
          resolution_due_at: string | null
          resolution_summary: string | null
          resolved_at: string | null
          response_breached_at: string | null
          response_due_at: string | null
          sla_policy_id: string | null
          source: string
          status: Database["public"]["Enums"]["ticket_status"]
          tenant_id: string | null
          ticket_number: number
          title: string
          total_steps: number | null
          updated_at: string
          waiting_on: string
        }
        SetofOptions: {
          from: "*"
          to: "tickets"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      apply_ticket_transition: {
        Args: {
          p_action: string
          p_assignee_profile_id?: string
          p_priority?: Database["public"]["Enums"]["ticket_priority"]
          p_reason?: string
          p_ticket_id: string
        }
        Returns: {
          assigned_profile_id: string | null
          assigned_workforce_person_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string
          current_step: number
          department_id: string | null
          description: string
          first_response_at: string | null
          history_batch_id: string | null
          id: string
          opened_at: string
          organization_id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id: string | null
          requester_wait_seconds: number
          requester_wait_started_at: string | null
          requester_workforce_person_id: string | null
          resolution_breached_at: string | null
          resolution_due_at: string | null
          resolution_summary: string | null
          resolved_at: string | null
          response_breached_at: string | null
          response_due_at: string | null
          sla_policy_id: string | null
          source: string
          status: Database["public"]["Enums"]["ticket_status"]
          tenant_id: string | null
          ticket_number: number
          title: string
          total_steps: number | null
          updated_at: string
          waiting_on: string
        }
        SetofOptions: {
          from: "*"
          to: "tickets"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      approve_workforce_management_assignment: {
        Args: { p_assignment_id: string; p_reason: string }
        Returns: boolean
      }
      create_ticket: {
        Args: {
          p_category?: string
          p_description?: string
          p_priority?: Database["public"]["Enums"]["ticket_priority"]
          p_title: string
        }
        Returns: {
          assigned_profile_id: string | null
          assigned_workforce_person_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string
          current_step: number
          department_id: string | null
          description: string
          first_response_at: string | null
          history_batch_id: string | null
          id: string
          opened_at: string
          organization_id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id: string | null
          requester_wait_seconds: number
          requester_wait_started_at: string | null
          requester_workforce_person_id: string | null
          resolution_breached_at: string | null
          resolution_due_at: string | null
          resolution_summary: string | null
          resolved_at: string | null
          response_breached_at: string | null
          response_due_at: string | null
          sla_policy_id: string | null
          source: string
          status: Database["public"]["Enums"]["ticket_status"]
          tenant_id: string | null
          ticket_number: number
          title: string
          total_steps: number | null
          updated_at: string
          waiting_on: string
        }
        SetofOptions: {
          from: "*"
          to: "tickets"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      decide_ticket_approval: {
        Args: { p_approval_id: string; p_decision: string; p_reason: string }
        Returns: {
          approver_profile_id: string | null
          decided_at: string | null
          decision_reason: string | null
          id: string
          organization_id: string
          permission_key: string
          reason: string
          requested_at: string
          requested_by: string
          status: string
          tenant_id: string | null
          ticket_id: string
        }
        SetofOptions: {
          from: "*"
          to: "ticket_approval_requests"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      dispatch_link_workforce_profile: {
        Args: {
          p_dispatch_level: string
          p_experience_months: number
          p_linked_by: string
          p_organization_id: string
          p_profile_id: string
          p_tenant_id: string
          p_workforce_person_id: string
        }
        Returns: Json
      }
      dispatch_offer_ticket: {
        Args: { p_actor_profile_id: string; p_ticket_id: string }
        Returns: Json
      }
      dispatch_respond_to_offer: {
        Args: {
          p_actor_profile_id: string
          p_note?: string
          p_offer_id: string
          p_response: string
        }
        Returns: Json
      }
      dispatch_set_profile_skills: {
        Args: {
          p_organization_id: string
          p_proficiency: number
          p_profile_id: string
          p_skill_keys: string[]
          p_tenant_id: string
        }
        Returns: Json
      }
      dispatch_set_ticket_requirements: {
        Args: {
          p_complexity: number
          p_organization_id: string
          p_required_skill_keys: string[]
          p_tenant_id: string
          p_ticket_id: string
          p_updated_by: string
        }
        Returns: Json
      }
      dispatch_upsert_presence: {
        Args: {
          p_availability_mode: string
          p_availability_status: string
          p_context_switches_30m: number
          p_current_activity: string
          p_current_context_key: string
          p_estimated_remaining_minutes: number
          p_organization_id: string
          p_profile_id: string
          p_tenant_id: string
        }
        Returns: Json
      }
      ensure_chat_buddy_welcome_message: {
        Args: { p_session_id: string }
        Returns: string
      }
      help_buddy_match_memories: {
        Args: {
          match_count?: number
          match_threshold?: number
          query_embedding: string
        }
        Returns: {
          confidence: number
          content: string
          id: string
          importance: number
          memory_type: string
          similarity: number
          title: string
          updated_at: string
        }[]
      }
      help_buddy_match_responses: {
        Args: {
          match_count?: number
          match_threshold?: number
          query_embedding: string
        }
        Returns: {
          category_id: string
          cooldown_turns: number
          follow_up_variants: Json
          id: string
          intent_key: string
          repeat_policy: string
          response_variants: Json
          similarity: number
          title: string
          tone: string
        }[]
      }
      help_buddy_search_qa: {
        Args: { max_results?: number; search_query: string }
        Returns: {
          answer_markdown: string
          confidence_threshold: number
          entry_id: string
          intent_key: string
          knowledge_base_id: string
          question: string
          rank_score: number
          source_article_id: string
        }[]
      }
      holds_role: { Args: { p_role_id: string }; Returns: boolean }
      intellisync_emit_event: {
        Args: {
          p_actor_profile_id: string
          p_aggregate_id: string
          p_aggregate_type: string
          p_aggregate_version?: number
          p_classification: string
          p_correlation_id?: string
          p_event_type: string
          p_idempotency_key: string
          p_occurred_at?: string
          p_organization_id: string
          p_payload: Json
          p_tenant_id: string
        }
        Returns: Json
      }
      intellisync_health: {
        Args: {
          p_is_global_admin: boolean
          p_organization_id: string
          p_tenant_id: string
        }
        Returns: Json
      }
      intellisync_list_connections: {
        Args: {
          p_is_global_admin: boolean
          p_organization_id: string
          p_tenant_id: string
          p_user_profile_id: string
        }
        Returns: Json
      }
      intellisync_list_events: {
        Args: {
          p_actor_profile_id: string
          p_is_global_admin: boolean
          p_is_support: boolean
          p_limit?: number
          p_organization_id: string
          p_tenant_id: string
        }
        Returns: Json
      }
      is_active_member: { Args: never; Returns: boolean }
      is_global_admin: { Args: never; Returns: boolean }
      is_org_admin: { Args: { p_organization_id: string }; Returns: boolean }
      kb_can_manage: { Args: never; Returns: boolean }
      kb_can_read_base: { Args: { base_id: string }; Returns: boolean }
      kb_is_super_admin: { Args: never; Returns: boolean }
      marketplace_request_deal_quote: {
        Args: {
          p_cart_id: string
          p_discount_percent: number
          p_reason: string
        }
        Returns: {
          accepted_at: string | null
          approval_required: boolean
          approved_at: string | null
          approved_by: string | null
          cart_id: string | null
          created_at: string
          currency: string
          discount_percent: number
          expires_at: string
          id: string
          list_monthly_total: number
          organization_id: string | null
          package_key: string | null
          pricing_snapshot: Json
          product_keys: string[]
          proposed_monthly_total: number
          quote_number: string
          reason: string
          status: string
          tenant_id: string | null
          updated_at: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "marketplace_deal_quotes"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      request_ticket_approval: {
        Args: {
          p_permission_key: string
          p_reason: string
          p_ticket_id: string
        }
        Returns: {
          approver_profile_id: string | null
          decided_at: string | null
          decision_reason: string | null
          id: string
          organization_id: string
          permission_key: string
          reason: string
          requested_at: string
          requested_by: string
          status: string
          tenant_id: string | null
          ticket_id: string
        }
        SetofOptions: {
          from: "*"
          to: "ticket_approval_requests"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      request_workforce_management_assignment: {
        Args: {
          p_assignment_reason?: string
          p_department_id?: string
          p_ends_at?: string
          p_management_role_key: string
          p_organization_id: string
          p_region_id?: string
          p_scope_type: string
          p_starts_at?: string
          p_tenant_id?: string
          p_workforce_person_id: string
        }
        Returns: string
      }
      revoke_workforce_management_assignment: {
        Args: { p_assignment_id: string; p_reason: string }
        Returns: boolean
      }
      revoke_workforce_profile_identity: {
        Args: { p_identity_link_id: string; p_reason: string }
        Returns: boolean
      }
      set_workforce_management_assignment_locations: {
        Args: {
          p_assignment_id: string
          p_location_organization_ids: string[]
          p_reason: string
        }
        Returns: number
      }
      update_ticket_details: {
        Args: {
          p_category: string
          p_description: string
          p_ticket_id: string
          p_title: string
        }
        Returns: {
          assigned_profile_id: string | null
          assigned_workforce_person_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string
          current_step: number
          department_id: string | null
          description: string
          first_response_at: string | null
          history_batch_id: string | null
          id: string
          opened_at: string
          organization_id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          requester_profile_id: string | null
          requester_wait_seconds: number
          requester_wait_started_at: string | null
          requester_workforce_person_id: string | null
          resolution_breached_at: string | null
          resolution_due_at: string | null
          resolution_summary: string | null
          resolved_at: string | null
          response_breached_at: string | null
          response_due_at: string | null
          sla_policy_id: string | null
          source: string
          status: Database["public"]["Enums"]["ticket_status"]
          tenant_id: string | null
          ticket_number: number
          title: string
          total_steps: number | null
          updated_at: string
          waiting_on: string
        }
        SetofOptions: {
          from: "*"
          to: "tickets"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      access_scope: "self" | "department" | "organization" | "tenant" | "global"
      asset_status:
        | "planned"
        | "active"
        | "maintenance"
        | "retired"
        | "quarantined"
        | "unknown"
      content_visibility:
        | "public_internal"
        | "department"
        | "restricted"
        | "founder_only"
        | "assistant_private"
      integration_status:
        | "not_configured"
        | "pending"
        | "connected"
        | "degraded"
        | "disconnected"
        | "error"
      member_status: "invited" | "active" | "suspended" | "disabled"
      ticket_priority: "low" | "medium" | "high" | "critical"
      ticket_status:
        | "new"
        | "offered"
        | "accepted"
        | "in_progress"
        | "waiting"
        | "escalated"
        | "resolved"
        | "closed"
        | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      access_scope: ["self", "department", "organization", "tenant", "global"],
      asset_status: [
        "planned",
        "active",
        "maintenance",
        "retired",
        "quarantined",
        "unknown",
      ],
      content_visibility: [
        "public_internal",
        "department",
        "restricted",
        "founder_only",
        "assistant_private",
      ],
      integration_status: [
        "not_configured",
        "pending",
        "connected",
        "degraded",
        "disconnected",
        "error",
      ],
      member_status: ["invited", "active", "suspended", "disabled"],
      ticket_priority: ["low", "medium", "high", "critical"],
      ticket_status: [
        "new",
        "offered",
        "accepted",
        "in_progress",
        "waiting",
        "escalated",
        "resolved",
        "closed",
        "cancelled",
      ],
    },
  },
} as const
