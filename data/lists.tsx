const LISTS = {
  first: {
    name: "First List",
    slug: "first",
  },
  second: {
    name: "Second List",
    slug: "second",
  },
}

export const ALL_LISTS = Object.values(LISTS)

export function getList(key) {
  return LISTS[key]
}
