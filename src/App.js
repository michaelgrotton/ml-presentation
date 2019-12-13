import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Card, List, Table } from "semantic-ui-react"

const models = ["K-Nearest Neighbors", "Linear Discriminant Analysis", "Naive Bayes"]
const colors = ["blue", "green", "red"]
const hex = ["#2185d0", "#21ba45", "#db2828"]
const model_acc = [.4932, .5362, .4781]
const tfidf_acc = [.5011, .574, .5137]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { model: 0, TFIDF: false, color:"#2185d0"}
  }

  render() {
  return (
    <div className="App">
      <Container style={{width:"75%", margin:"25px auto", textAlign:"left"}}>
        <p style={{fontSize:"16px", color:"black"}}>
          The goal of this project was to classify wine varieties using textual, categorical and
numerical features gathered by reviewers during a wine tasting. Categorical variables were
preprocessed using one hot encoding, and textual data was preprocessed using the term
frequency-inverse document frequency statistic. The results of several classifiers, with and without TF-IDF is below.
        </p>
      </Container>
      <Container>
        <Card style={{width:"75%", height:"100px", margin:"25px auto"}}>
          <Card.Content>
            <Card.Header style={{fontSize:"25px"}}><span style={{color:this.state.color}}>{models[this.state.model]}</span> <span style={{color:"rgba(0,0,0,.6)"}}>{this.state.TFIDF && "with TF-IDF"}</span></Card.Header>
            <Card.Description style={{fontSize:"20px"}}>
              Accuracy: {this.state.TFIDF ? tfidf_acc[this.state.model] : model_acc[this.state.model]}
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
      <Container>
        {
          models.map((model, i) => {
            return (
              <Button basic color={colors[i]} onClick={()=> {this.setState({model: i, color: hex[i]})}}>{model}</Button>
            )
          })
        }
        <Button onClick={()=>{this.setState(prevState => ({
            TFIDF: !prevState.TFIDF
          }));}}>TF-IDF</Button>
      </Container>
      <Container style={{width:"75%", margin:"25px auto", textAlign:"left"}}>
        <p style={{fontSize:"16px", color:"black"}}>
          For the textual description data, I used the term frequency-inverse document frequency
          statistic (tf-idf). Tf-idf considers a corpus of documents, which in this case is the collection of
          wine descriptions, and assigns each word a score based on the rarity of the word in the entire
          corpus. An example of tf-idf statistics for a corpus of documents is as follows.
        </p>
        <p style={{fontSize:"16px", color:"black"}}> Given the below sentences: </p>
        <List bulleted>
          <List.Item>'the man went out for a walk'</List.Item>
          <List.Item>'the children sat around the fire'</List.Item>
        </List>
        <p style={{fontSize:"16px", color:"black"}}> The TF-IDF scores are as follows. </p>
        <div style={{width:"100%", overflowX:"scroll"}}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>a</Table.HeaderCell>
                <Table.HeaderCell>around</Table.HeaderCell>
                <Table.HeaderCell>children</Table.HeaderCell>
                <Table.HeaderCell>fire</Table.HeaderCell>
                <Table.HeaderCell>for</Table.HeaderCell>
                <Table.HeaderCell>man</Table.HeaderCell>
                <Table.HeaderCell>out</Table.HeaderCell>
                <Table.HeaderCell>sat</Table.HeaderCell>
                <Table.HeaderCell>the</Table.HeaderCell>
                <Table.HeaderCell>walk</Table.HeaderCell>
                <Table.HeaderCell>went</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  0.099021
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.099021
                </Table.Cell>
                <Table.Cell>
                  0.099021
                </Table.Cell>
                <Table.Cell>
                  0.099021
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.099021
                </Table.Cell>
                <Table.Cell>
                  0.099021
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.115525
                </Table.Cell>
                <Table.Cell>
                  0.115525
                </Table.Cell>
                <Table.Cell>
                  0.115525
                </Table.Cell>
                <Table.Cell>
                    0.000000
                </Table.Cell>
                <Table.Cell>
                    0.000000
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.115525
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                  0.000000
                </Table.Cell>
                <Table.Cell>
                    0.000000
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          </div>
      </Container>
    </div>
  );
}
}

export default App;
