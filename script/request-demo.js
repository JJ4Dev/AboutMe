export const skills = [
  { name: 'C# / .NET', area: 'Backend & integrations' },
  { name: 'Blazor', area: 'Web interfaces' },
  { name: 'JavaScript', area: 'Web interfaces' },
  { name: 'SQL Server', area: 'Data' },
  { name: 'Azure', area: 'Cloud' },
  { name: 'SignalR', area: 'Real-time applications' }
];

export function planRequest(query, { offline = false } = {}) {
  const trace = [{ layer: 0, key: 'traceInput' }, { layer: 1, key: 'traceValidate' }];
  const normalized = typeof query === 'string' ? query.trim() : '';
  if (!normalized || normalized.length > 40) {
    return { status: 400, label: 'Bad Request', body: { error: 'Enter a query between 1 and 40 characters.' },
      trace: [...trace, { layer: 0, key: 'traceInvalid' }] };
  }
  trace.push({ layer: 2, key: 'traceQuery' });
  if (offline) {
    return { status: 503, label: 'Service Unavailable', body: { error: 'The demo data source is unavailable. Try again with it online.' },
      trace: [...trace, { layer: 1, key: 'traceUnavailable' }, { layer: 0, key: 'traceError' }] };
  }
  const results = skills.filter(skill => `${skill.name} ${skill.area}`.toLowerCase().includes(normalized.toLowerCase()));
  return { status: 200, label: 'OK', body: { query: normalized, count: results.length, results },
    trace: [...trace, { layer: 1, key: 'traceSerialize' }, { layer: 0, key: 'traceSuccess' }] };
}
