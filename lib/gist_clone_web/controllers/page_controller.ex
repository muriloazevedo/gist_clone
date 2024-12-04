defmodule GistCloneWeb.PageController do
  use GistCloneWeb, :controller

  def home(conn, _params) do
<<<<<<< HEAD
    redirect(conn, to: "/create")
=======
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
>>>>>>> main
  end
end
