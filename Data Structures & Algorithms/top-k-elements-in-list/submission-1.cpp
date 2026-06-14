class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        std::unordered_map <int,int> myMap;

        for(int& num : nums){
            myMap[num]++;
        }

        // std::vector<std::pair<int,int>> freqVec(myMap.begin(),myMap.end());

        // std::sort(freqVec.begin(),freqVec.end(), [](const std::pair<int,int>&a, const std::pair<int,int>&b){
        //     return b.second < a.second;
        // });

        std::priority_queue<std::pair<int,int>>  maxHeap;

        for(auto& pair : myMap){
            maxHeap.push({pair.second,pair.first});
        }

        vector<int> result;

        for(int i=0; i< k; i++){
            // result.push_back(freqVec[i].first);

            result.push_back(maxHeap.top().second);
            maxHeap.pop();
        }

        return result;
    };
};
