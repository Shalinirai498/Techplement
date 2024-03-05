function addToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }
  function calculate() {
    try {
      var expression = document.getElementById('display').value;
      var result = eval(expression);
      var historyItem = {
        expression: expression,
        result: result
      };
      var history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
      history.push(historyItem);
      localStorage.setItem('calculatorHistory', JSON.stringify(history));
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
// Function to fetch history from localStorage
function fetchHistory() {
    var history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    return history;
}

// Function to display history
function showHistory() {
    var historyBlock = document.getElementById('historyBlock');
    historyBlock.innerHTML = ''; // Clear previous history

    var history = fetchHistory();
    var startIndex = Math.max(0, history.length - 10); // Start index to show last 10 entries
    var lastTenEntries = history.slice(startIndex); // Get last 10 entries

    if (lastTenEntries.length === 0) {
        historyBlock.innerHTML = 'No history available.';
    } else {
        var historyList = document.createElement('ul');
        lastTenEntries.forEach(function (item) {
            var listItem = document.createElement('li');
            listItem.textContent = item.expression + ' = ' + item.result;
            historyList.appendChild(listItem);
        });
        historyBlock.appendChild(historyList);
    }
    historyBlock.style.display = 'block'; // Show history block
}
function clearHistory() {
  localStorage.setItem('calculatorHistory', JSON.stringify([])); // Clear history from localStorage
  var historyBlock = document.getElementById('historyBlock');
  historyBlock.innerHTML = ''; // Clear history block
}




