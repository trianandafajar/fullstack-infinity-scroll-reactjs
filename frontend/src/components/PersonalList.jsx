import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

const PersonalList = () => {
  const [data, setData] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [tempId, setTempId] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");

  const limit = 30;

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/personals?search_query=${keyword}&lastId=${lastId}&limit=${limit}`
      );
      const newData = response.data.result;

      // Gabung data baru tanpa duplikat berdasarkan `id`
      setData((prev) => {
        const existingIds = new Set(prev.map((d) => d.id));
        const filteredNew = newData.filter((d) => !existingIds.has(d.id));
        return [...prev, ...filteredNew];
      });

      setTempId(response.data.lastId);
      setHasMore(response.data.hasMore);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  }, [lastId, keyword]);

  useEffect(() => {
    getData();
  }, [getData]);

  const fetchMore = () => {
    setLastId(tempId);
  };

  const searchData = (e) => {
    e.preventDefault();
    setLastId(0);
    setData([]);
    setKeyword(query);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Form onSubmit={searchData}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" variant="info">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Ip Address</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.ip_address}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </InfiniteScroll>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalList;
