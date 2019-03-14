defmodule TeamdynamixTv.Ticket do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tickets" do
    field :days_old, :integer
    field :resp_group, :string
    field :status, :string
    field :ticket_id, :integer
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(ticket, attrs) do
    ticket
    |> cast(attrs, [:ticket_id, :title, :status, :days_old, :resp_group])
    |> validate_required([:ticket_id, :title, :status, :days_old, :resp_group])
    |> unique_constraint(:ticket_id)
  end
end
