defmodule PhxInertiaReactTsTw.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      PhxInertiaReactTsTwWeb.Telemetry,
      PhxInertiaReactTsTw.Repo,
      {DNSCluster, query: Application.get_env(:phx_inertia_react_ts_tw, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: PhxInertiaReactTsTw.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: PhxInertiaReactTsTw.Finch},
      # Start a worker by calling: PhxInertiaReactTsTw.Worker.start_link(arg)
      # {PhxInertiaReactTsTw.Worker, arg},
      # Start to serve requests, typically the last entry
      PhxInertiaReactTsTwWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: PhxInertiaReactTsTw.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    PhxInertiaReactTsTwWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
