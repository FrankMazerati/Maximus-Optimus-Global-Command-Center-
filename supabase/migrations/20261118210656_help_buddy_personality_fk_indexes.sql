
CREATE INDEX IF NOT EXISTS help_buddy_behavior_rules_expression_idx ON public.help_buddy_behavior_rules(expression_key) WHERE expression_key IS NOT NULL;
CREATE INDEX IF NOT EXISTS help_buddy_behavior_test_cases_expression_idx ON public.help_buddy_behavior_test_cases(expected_expression_key) WHERE expected_expression_key IS NOT NULL;
CREATE INDEX IF NOT EXISTS help_buddy_personality_preferences_personality_idx ON public.help_buddy_personality_preferences(personality_key);
CREATE INDEX IF NOT EXISTS help_buddy_personality_preferences_created_by_idx ON public.help_buddy_personality_preferences(created_by) WHERE created_by IS NOT NULL;
CREATE INDEX IF NOT EXISTS help_buddy_personality_preferences_updated_by_idx ON public.help_buddy_personality_preferences(updated_by) WHERE updated_by IS NOT NULL;
