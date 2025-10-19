import type { LayoutServerData, LayoutServerLoad } from "./$types"
 
export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth()
 
  return {
    session,
  }
}