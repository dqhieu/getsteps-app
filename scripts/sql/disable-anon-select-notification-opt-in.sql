-- Goal: anon may WRITE opt-ins but may NOT READ them. service_role bypasses RLS,
-- so the dashboard keeps working. Applies to the production table only.

-- 1. INSPECT FIRST (run these and review output before continuing):
--    select relrowsecurity, relforcerowsecurity
--      from pg_class where relname = 'notification_opt_in';
--    select policyname, cmd, roles, qual, with_check
--      from pg_policies where tablename = 'notification_opt_in';
--
--    Then DROP any existing policy that grants anon SELECT or "ALL", e.g.:
--    -- drop policy "<existing_policy_name>" on public.notification_opt_in;

-- 2. APPLY target end-state:
alter table public.notification_opt_in enable row level security;

-- Write-only access for the anon role (used by the iOS app):
create policy "anon can insert opt-ins"
  on public.notification_opt_in for insert to anon with check (true);

create policy "anon can update opt-ins"
  on public.notification_opt_in for update to anon using (true) with check (true);

create policy "anon can delete opt-ins"
  on public.notification_opt_in for delete to anon using (true);

-- No SELECT policy for anon => anon cannot read the table.
-- (service_role and the dashboard are unaffected: service_role bypasses RLS.)
