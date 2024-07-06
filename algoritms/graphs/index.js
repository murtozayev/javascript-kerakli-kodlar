// Depth First Search
class GraphDFS {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        }
    }
    depthFirstSearch(starVertex) {
        const visited = {}
        const result = []

        const dfs = (vertex) => {
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(starVertex)
        return result
    }
}

const graphDFS = new GraphDFS()
graphDFS.addVertex("A")
graphDFS.addVertex("B")
graphDFS.addVertex("C")
graphDFS.addVertex("D")
graphDFS.addEdge("A", "B")
graphDFS.addEdge("A", "C")
graphDFS.addEdge("B", "D")
graphDFS.addEdge("C", "D")
console.log(graphDFS.adjacencyList);
console.log(graphDFS.depthFirstSearch("B"));