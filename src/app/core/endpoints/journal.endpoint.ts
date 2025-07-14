export const journalEndpoint = {
  'getJournals': '/journals',
  'getJournal': (id: string) => `/journals/${id}`,
  'getEntries': (id: string, page:string) => `/journals/${id}/entries/${page}`,
}
