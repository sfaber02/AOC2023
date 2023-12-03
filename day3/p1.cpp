#include <iostream>
#include <fstream>
#include <string>
#include <regex>

using namespace std;


vector<vector<char> > readFile() {
    ifstream file("./p1.txt");
    string line;
    vector<vector<char> > blueprint;
    while (getline(file, line)) {
        vector<char> current_line;
        for (char character : line) current_line.push_back(character);
        blueprint.push_back(current_line);
    }
    file.close();
    return blueprint;
}

bool isNum(char c) {
    regex pattern("[0-9]");
    return regex_match(string(1, c), pattern);
}

bool isGear(char c) {
    char asterisk = '*';
    return c == asterisk;
}

int makeIntAndRemove(vector<vector<char> >& bp, int row, int left, int right) {
    string numString;
    char period = '.';

    for (left; left < right; left++) {
        numString += bp[row][left];
        bp[row][left] = period;
    }

    return stoi(numString);  
}

int searchForNums(vector<vector<char> >& bp, int symbolRow, int symbolCol) {
    int sum = 0;
    vector<int> partList;

    for (int rowMod = -1; rowMod <= 1; rowMod++) {
        int row = symbolRow + rowMod;
        int left, right;
        for (int col = 0; col < bp[row].size(); col++) {
            if (isNum(bp[row][col])){
                left = col;
                right = col;
                while (isNum(bp[row][right]) && right < bp[row].size()) right++;
                col = right - 1;
                if (
                ((left >= symbolCol - 1 && left <= symbolCol + 1) && left <= right) ||
                ((right >= symbolCol && right <= symbolCol + 2) && right >= left)
                ) partList.push_back(makeIntAndRemove(bp, row, left, right));
            }
        }
    }

    if (partList.size() > 1) {
        sum = partList[0];
        for (int i = 1; i < partList.size(); i++) sum *= partList[i];
    }
    return sum;
}



int main() {
    //read file and create matrix
    vector<vector<char> > bp = readFile();

    //search for gears in matrix
    int sum = 0;
    for (int row = 0; row < bp.size(); row++) {
        for (int col = 0; col < bp[row].size(); col++) {
            if (isGear(bp[row][col])) {
                sum += searchForNums(bp, row, col);
            }  
        }
    }

    cout << "Sum = " << sum << endl;
    return 0;
}
