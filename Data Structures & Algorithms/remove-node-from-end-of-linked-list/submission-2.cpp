/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* demo = new ListNode();
        demo->next = head;
        ListNode* left = demo;
        ListNode* right = head;

        while(right != nullptr){
            if(n != 0){
                right = right->next;
                n--;
            }else{
                right = right->next;
                left = left->next;
            }
        }

        left->next = left->next->next;

        return demo->next;
    }
};
