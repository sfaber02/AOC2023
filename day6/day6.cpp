
#include <iostream>
#include <fstream>
#include <string>
#include <regex>

using namespace std;




long timeA[] = {47847467};
long distanceA[] = {207139412091014};

//toy caSE
// int timeA[] = {7, 15, 30};
// int distanceA[] = {9, 40, 200};



int main () {
    long length = sizeof(timeA) / sizeof(timeA[0]);
    long wins[1] = {0};

    for (long i = 0; i < length; i++) {
        long record = distanceA[i];
        long ms = timeA[i];
        for (long charge = 1; charge < ms; charge++) {
            if (charge * (ms - charge) > record) {
                wins[i]++;
            }
        }
    }
    
    long sum = 1;
    for (long win : wins) {
        sum *= win;
    }
    cout << "Final Product = " << sum << endl;
    return 0;
}
