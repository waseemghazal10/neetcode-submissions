class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def markAsVisited(grid, visited, r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS or visited[r][c] or grid[r][c] == '0':
                return
            
            visited[r][c] = True

            markAsVisited(grid, visited, r + 1, c)
            markAsVisited(grid, visited, r, c + 1)
            markAsVisited(grid, visited, r - 1, c)
            markAsVisited(grid, visited, r, c - 1)

        ROWS, COLS = len(grid), len(grid[0])
        visited = [[False] * COLS for i in range(ROWS)]
        
        numOfIslands = 0
        for i in range(ROWS):
            for j in range(COLS):
                if grid[i][j] == '0' or visited[i][j]:
                    continue

                numOfIslands += 1
                markAsVisited(grid, visited, i, j)
 
        return numOfIslands