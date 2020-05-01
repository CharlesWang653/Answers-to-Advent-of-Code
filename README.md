# Answers-to-Advent-of-Code
  The source code are the solution1.js, solution4.js, solution4P2.js, solution10P1.js and solution10P2.js.
## solution 1(question 10)：
  there are fout direction for the question. so from the first step, accumulate the distance of how far the one walked and what's the direction for that. Then the number we can get in the map. The north and south, east and west can be offset. Then we can add the two together for the result.
## solution 2(question 4):
  ### part one
    Put all the words into an Object, then sort the object by the number of the occurance; Then take 5 characters for the checksum. 
    Since the data are bit more, I store all the data in a txt file(question4Data.txt), and read all the data from that.
    When the room is a real code, reduce the ID and accumulate it.
  ### part two
    first get the offset from the id, then calculate the alphabet by the cycle. then compare all the real word to the checkword.
## solution 2(question 4):
  ### part one:
    Go through the instructions once and build all the structure for all the bots, then for the second time of traversal, start to set all the value to the bots. Use a queue to maintain the bots that has already two values in it. Compare the two given number every time the loop goes on.
  ### part two:
    record all the number that goes in the output first time. And if it has already set, stop set the value.
