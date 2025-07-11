defmodule PhxInertiaReactTsTwWeb.PageController do
  use PhxInertiaReactTsTwWeb, :controller

  def login(conn, _params) do
    conn
    |> assign_prop(:title, "Welcome to the login page")
    |> render_inertia("Login")
  end

  def counter(conn, _params) do
    conn
    |> assign_prop(:title, "A simple react counter")
    |> render_inertia("Counter")
  end

  def todos(conn, _params) do
    conn
    |> assign_prop(:title, "A simple react todo app")
    |> render_inertia("Todos")
  end
end
