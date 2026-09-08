export type View = 'about' | 'experience' | 'projects' | 'favorites' | 'writing'

const hashViews: Partial<Record<string, View>> = {
  '#/experience': 'experience',
  '#/projects': 'projects',
  '#/favorites': 'favorites',
  '#/writing': 'writing',
}

export function viewFromHash(hash: string): View {
  return hashViews[hash] ?? 'about'
}
