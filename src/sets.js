/*
  union
  This function returns the union of two lists.
  The result set should contain only one instance of each element.
  list1=[1,2,3];
  list2=[3,4,5];
  union(list1,list2) => [1,2,3,4,5]
*/


/*
  intersection
  This function should return the intersection of two lists.
  The intersection should contain only one instance of duplicate elements
  list1=[1,2,2,3];
  list2=[2,3,4];
  intersection(list1,list2) => [2,3]
*/


/*
  difference
  This function returns the list of unique elements that are present in the first
  list but not the second. The order of arguments matter here.
  The result should only contain one instance of duplicate elements.
  If there are no elements unique to the first list, the result will be an empty list.
  list1=[1,2,3];
  list2=[1,2,4];
  difference(list1,list2) => [3]
  difference(list2,list1) => [4]
  difference(list1,list1) => []
*/


/*
  isSubset
  This function should determine whether the second list is a subset of the first.
  list1=[1,2,3];
  list2=[1,2];
  isSubset(list1,list2) => true
  isSubset(list2,list1) => false
*/


/*
  isReverse
  This function determines if the any one of the lists is a reversed copy of the other.
  list1=[1,2,3];
  list2=[3,2,1];

  isReverse(list1,list2) => true
  isReverse(list2,list1) => true

  list1=[1,2,4];
  list2=[3,2,1];
  isReverse(list1,list2) => false
  isReverse(list2,list1) => false
*/



/*
  areEqual.
  This function determines if two lists have the exact same elements in the exact same order.
  list1=[1,2,3];
  list2=[1,2,3];

  areEqual(list1,list2) => true
  areEqual(list2,list1) => true

  list1=[1,2,3];
  list2=[2,1,3];

  areEqual(list1,list2) => false
  areEqual(list2,list1) => false
*/


/*
  isSameSet.
  This function returns true if both lists contain the same elements regardless of order.
  Also, every element in the first list has to be contained by the second and vice-versa.

  list1=[1,2,3];
  list2=[1,2,3];

  isSameSet(list1,list2) => true
  isSameSet(list2,list1) => true

  list1=[1,2,3];
  list2=[2,1,3];

  isSameSet(list1,list2) => true
  isSameSet(list2,list1) => true

  list1=[1,2,3];
  list2=[2,1,3,4];

  isSameSet(list1,list2) => false
  isSameSet(list2,list1) => false
*/



exports.union=union;
exports.intersection=intersection;
exports.difference=difference;
exports.isSubset=isSubset;
exports.isReverse=isReverse;
exports.areEqual=areEqual;
exports.isSameSet=isSameSet;
exports.range=range;
