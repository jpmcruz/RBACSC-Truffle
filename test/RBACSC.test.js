const RBACSC = artifacts.require('./RBACSC.sol')

contract('RBACSC', (accounts) => {
  before(async () => {
    this.RBACSC = await RBACSC.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.RBACSC.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('oganization added', async () => {
    const orgName = await this.RBACSC.organizationName()
  //  const task = await this.todoList.tasks(taskCount)
    assert.notEqual(orgName, '')
    // assert.equal(task.id.toNumber(), taskCount.toNumber())
    // assert.equal(task.content, 'Check out dappuniversity.com')
    // assert.equal(task.completed, false)
    // assert.equal(taskCount.toNumber(), 1)
  })
})
