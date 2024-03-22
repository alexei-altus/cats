import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '@/components/Header'

export const Route = createRootRoute({
  component: () => (
    <div className="App font-mono h-screen">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})
