import { Badge } from '@/components/ui/badge';

// draft / published / scheduled (published with a future date — hidden on the site until then)
export default function StatusBadge({ status, publishedAt }) {
  const scheduled = status === 'published' && publishedAt && new Date(publishedAt) > new Date();
  if (scheduled) return <Badge variant="info">scheduled</Badge>;
  return <Badge variant={status === 'published' ? 'success' : 'neutral'}>{status}</Badge>;
}
