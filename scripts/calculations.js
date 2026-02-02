let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

let balanceColor = "green";

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (totalExpensesValue && expenseEntries.length > 0) {
    return totalExpensesValue / expenseEntries.length;
  }
  return 0;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let totalCategory = 0;
  for (let expenseEntry of expenseEntries) {
    if (category === expenseEntry[0]) {
      totalCategory += expenseEntry[1];
    }
  }
  return totalCategory;
}

function calculateLargestCategory() {
  let categoriesSet = new Set();
  for (let i = 0; i < expenseEntries.length; i++) {
    categoriesSet.add(expenseEntries[i][0]);
  }
  let categoriesArray = Array.from(categoriesSet);
  categories = categoriesArray;

  let categoriesTotals = [];
  for (let category of categories) {
    listCategory = [];
    categoryTotal = calculateCategoryExpenses(category);
    listCategory.push(category, categoryTotal);
    categoriesTotals.push(listCategory);
  }

  let categoryName;
  let categoryValue = 0;
  for (let i = 0; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > categoryValue) {
      categoryValue = categoriesTotals[i][1];
      categoryName = categoriesTotals[i][0];
    }
  }
  return categoryName;
}

function addExpenseEntry(array) {
  expenseEntries.push(array);
}
