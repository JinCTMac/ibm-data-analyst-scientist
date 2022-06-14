const randomPopulator = (n, arr) => {
	for (let i = 0; i < n; i++) {
  	arr.push(Math.floor(Math.random() * 10))
  }
}

const evenOddSorter = (arr) => {
  const newArr = []
	arr.forEach((element) => {
  	if (element % 2 == 0) {
    	newArr.push(element)
    }
  })
  return newArr
}

const test = (n) => {
	const arr = []
  randomPopulator(n, arr)
  return evenOddSorter(arr)
}

console.log(test(20))
