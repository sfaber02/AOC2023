#include <iostream>
#include <fstream>
#include <string>
#include <regex>

using namespace std;


vector<vector<char> > readFile() {
    ifstream file("./p1.txt");

    string line;
    vector<vector<char> > blueprint;
    cout << endl;
    while (getline(file, line)) {
        vector<char> current_line;
        for (char character : line) {
            cout << character << " ";
            current_line.push_back(character);
        }
        blueprint.push_back(current_line);
        cout << endl;
    }
    cout << endl << endl;

    file.close();
    return blueprint;
}

bool isNum(char c) {
    regex pattern("[0-9]");
    return regex_match(string(1, c), pattern);
}

bool isChar(char c) {
    regex pattern("\\.");
    return !regex_match(string(1, c), pattern) && !isNum(c);
}

int makeIntAndRemove(vector<vector<char> >& bp, int row, int left, int right) {
    string numString;
    int num;
    char period = '.';

    for (left; left < right; left++) {
        numString += bp[row][left];
        bp[row][left] = period;
        // cout << bp[row][left];
    }
    // cout << numString << ", ";

    return stoi(numString);
    
}

int searchForNums(vector<vector<char> >& bp, int symbolRow, int symbolCol) {
    int sum = 0;
    for (int rowMod = -1; rowMod <= 1; rowMod++) {
        int row = symbolRow + rowMod;
        int left, right;
        for (int col = 0; col < bp[row].size(); col++) {
            if (isNum(bp[row][col])){
                left = col;
                right = col;
                while (isNum(bp[row][right]) && right < bp[row].size()) {
                    right++;
                }
                col = right - 1;
                if (
                ((left >= symbolCol - 1 && left <= symbolCol + 1) && left <= right) ||
                ((right >= symbolCol && right <= symbolCol + 2) && right >= left)
                ) {
                    sum += makeIntAndRemove(bp, row, left, right);
                }
            }
        }
    }
    return sum;
}



int main() {
    //read file and create matrix
    vector<vector<char> > bp = readFile();

    int sum = 0;
    for (int row = 0; row < bp.size(); row++) {
        for (int col = 0; col < bp[row].size(); col++) {
            if (isChar(bp[row][col])) {
                sum += searchForNums(bp, row, col);
            }  
        }
    }

    return 0;
}
