import { getLeads } from "@/lib/kv";
import { LeadsTable } from "./leads-table";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await getLeads(200);

  return (
    <div className="max-w-6xl">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All inbound inquiries from the contact form.
          </p>
        </div>
        <div className="text-xs font-mono text-muted-foreground">
          {leads.length} total
        </div>
      </div>

      <div className="mt-8">
        <LeadsTable initialLeads={leads} />
      </div>
    </div>
  );
}
