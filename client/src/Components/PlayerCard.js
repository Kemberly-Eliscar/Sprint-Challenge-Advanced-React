import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function PlayerCard(props) {
  const { name } = props;
  const { status } = props;
  const { origin } = props;
  const { id } = props;

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="SoccarPlayer">{soccarPlayer}</span>
          </Card.Meta>
          <Card.Description>
            <p>Status : {status}</p>
            <p>Origin : {origin.name}</p>
            <p>id: {id}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
