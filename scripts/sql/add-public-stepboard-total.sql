-- Expose one aggregate value for the public landing page without granting
-- anonymous access to any Stepboard member or daily-stat row.

create or replace function public.get_public_stepboard_total_steps()
returns bigint
language sql
stable
security definer
set search_path = pg_catalog, public
as $function$
  select greatest(
    coalesce(sum(stats.steps::bigint), 0::numeric),
    0::numeric
  )::bigint
  from public.user_daily_stats as stats;
$function$;

revoke all
on function public.get_public_stepboard_total_steps()
from public;

grant execute
on function public.get_public_stepboard_total_steps()
to anon, authenticated, service_role;

comment on function public.get_public_stepboard_total_steps() is
  'Returns the all-time step total across retained Stepboard daily stats.';
