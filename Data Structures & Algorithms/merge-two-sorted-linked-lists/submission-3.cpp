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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {

        if(list1 == nullptr) return list2;
        else if(list2 == nullptr) return list1;

        ListNode* list3 = new ListNode();
        ListNode* current = list3;

        ListNode* ptr1 = list1;
        ListNode* ptr2 = list2;

        while(ptr1 != nullptr and ptr2 != nullptr){
            if(ptr1->val <= ptr2->val){
                current->next = ptr1;
                current = ptr1;
                ptr1 = ptr1->next;
            }
            else{
                current->next = ptr2;
                current = ptr2;
                ptr2 = ptr2->next;
            }
        }

        if(ptr1 == nullptr){
            current->next = ptr2;
        }else if(ptr2 == nullptr){
            current->next = ptr1;
        }

        return list3->next;

    }
};
