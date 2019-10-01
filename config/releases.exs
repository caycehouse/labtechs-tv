# In this file, we load production configuration and secrets
# from environment variables. You can also hardcode secrets,
# although such is generally not recommended and you have to
# remember to add this file to your .gitignore.
import Config

database_url =
  System.get_env("DATABASE_URL") ||
    raise """
    environment variable DATABASE_URL is missing.
    For example: ecto://USER:PASS@HOST/DATABASE
    """

config :teamdynamix_tv, TeamdynamixTv.Repo,
  # ssl: true,
  url: database_url,
  pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10")

secret_key_base =
  System.get_env("SECRET_KEY_BASE") ||
    raise """
    environment variable SECRET_KEY_BASE is missing.
    You can generate one by calling: mix phx.gen.secret
    """

config :teamdynamix_tv, TeamdynamixTvWeb.Endpoint,
  http: [:inet6, port: String.to_integer(System.get_env("PORT") || "4000")],
  secret_key_base: secret_key_base

# ## Using releases (Elixir v1.9+)
#
# If you are doing OTP releases, you need to instruct Phoenix
# to start each relevant endpoint:
#
config :teamdynamix_tv, TeamdynamixTvWeb.Endpoint, server: true
#
# Then you can assemble a release by calling `mix release`.
# See `mix help release` for more information.

# Configure teamdynamix settings
config :teamdynamix_tv, :teamdynamix_settings,
  auth_url: "",
  new_tickets_url: "",
  ticket_url: "",
  api_ticket_url: "",
  resolutions_url: "",
  username: "",
  password: ""

# Configure papercut settings
config :teamdynamix_tv, :papercut_settings,
  api_token: "",
  printers_url: "",
  devices_url: "",
  system_url: "",
  print_provider_url: "",
  webprint_url: "",
  mobilityprint_url: ""