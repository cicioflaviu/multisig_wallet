import React, { useEffect, useState } from 'react';
import { getWeb3, getWallet } from './utils.js';
import Header from './Header.js';
import NewTransfer from './NewTransfer.js';
import TransferList from './TransferList.js';

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  }, []);

  if(
      typeof web3 === 'undefined'
      || typeof accounts === 'undefined'
      || typeof wallet === 'undefined'
      || typeof quorum === 'undefined'
      || approvers.length === 0
  ) {
    return <div>Loading...</div>
  }

  const refreshTransfers = async () => {
    console.log("REFRESH")
    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);
  }

  const createTransfer = async transfer => {
    console.log(transfer)
    await wallet.methods
      .createTransfer(transfer.amount, transfer.to)
      .send({from: accounts[0], gas: 1000000});
    refreshTransfers();
  }

  const approveTransfer = async transferId => {
    console.log(accounts[0])
    console.log(await wallet.methods
      .approveTransfer(transferId)
      .send({from: accounts[0], gas: 1000000}));
    refreshTransfers();
  }

  return (
    <div className="App">
      MultiSig Wallet
      <Header approvers = {approvers} quorum = {quorum}/>
      <NewTransfer createTransfer = {createTransfer} />
      <TransferList transfers = {transfers} approveTransfer = {approveTransfer} />
    </div>
  );
}

export default App;