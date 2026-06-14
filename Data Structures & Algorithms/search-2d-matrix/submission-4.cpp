class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int rows = matrix.size() ;
        int cols = matrix[0].size();

        for(int i = 0; i < rows; i++){
            if(target >= matrix[i][0] && target <= matrix[i][cols - 1]){
            
                int left = 0;
                int right = cols - 1;

                while (left <= right){
                    int mid = ((left + right) / 2);

                    if(matrix[i][mid] == target) return true;
                    else if(target < matrix[i][mid]) right = mid - 1;
                    else left = mid + 1;
                }
            }
        }

        return false;
    }
};
