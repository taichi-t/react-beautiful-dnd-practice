import React from "react";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
margin:8px;
border:1px solid lightgrey
border-radius:; 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskLisk = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <TaskLisk>
          {this.props.tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </TaskLisk>
      </Container>
    );
  }
}
