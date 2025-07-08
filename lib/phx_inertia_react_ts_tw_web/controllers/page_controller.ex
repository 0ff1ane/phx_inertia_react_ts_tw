defmodule PhxInertiaReactTsTwWeb.PageController do
  use PhxInertiaReactTsTwWeb, :controller

  def home(conn, _params) do
    conn
    |> assign_prop(:title, "Welcome to the home page")
    |> render_inertia("Home")
  end
end
