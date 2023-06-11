function hotPotato(names, num) {
  // 1.创建队列
  const queue = []


  // 2.将names添加到队列中
  for (const name of names) {
    queue.unshift(name)
  }

  while(queue.length > 1) {
    for ( let i = 1; i < num; i++) {
      const name = queue.shift()
      queue.unshift(name)
    }

    queue.shift()
  }

  return queue.shift()
}

const name = hotPotato(["cuixin", "james", "kobe", "curry"], 3)
console.log(name);