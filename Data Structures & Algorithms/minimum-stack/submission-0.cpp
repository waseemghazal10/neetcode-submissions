class MinStack {

private:
vector<int> data;
vector<int> minData;

public:
    MinStack() {
        
    }
    
    void push(int val) {
        data.push_back(val);
        if(minData.empty() or val <= minData.back()){
            minData.push_back(val);
        }    

    }
    
    void pop() {
        if(data.empty()) return;
        int val = data.back();
        data.pop_back();
        if(!minData.empty() and val == minData.back()){
            minData.pop_back();
        }
    }
    
    int top() {
        return data.back();
    }
    
    int getMin() {
        return minData.back();
    }
};
