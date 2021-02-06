import React, { useEffect, useState } from 'react';
import { getWeb3, getWallet } from './utils.js';
import ApproverList from './components/ApproverList.js';
import NewTransfer from './components/NewTransfer.js';
import TransferList from './components/TransferList.js';
import Header from './components/Header.js';

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

  const isConnected =  !(typeof web3 === 'undefined'
                      || typeof accounts === 'undefined'
                      || typeof wallet === 'undefined'
                      || typeof quorum === 'undefined'
                      || approvers.length === 0)

  const refreshTransfers = async () => {
    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);
  }

  const createTransfer = async transfer => {
    await wallet.methods
      .createTransfer(transfer.amount, transfer.to)
      .send({from: accounts[0], gas: 1000000});
    refreshTransfers();
  }

  const approveTransfer = async transferId => {
    await wallet.methods
      .approveTransfer(transferId)
      .send({from: accounts[0], gas: 1000000});
    refreshTransfers();
  }

  return (
    <React.Fragment>
      <Header isConnected={isConnected}/>
      <ApproverList approvers = {approvers} quorum = {quorum}/>
      <NewTransfer createTransfer = {createTransfer} />
      <TransferList transfers = {transfers} approveTransfer = {approveTransfer} />
    </React.Fragment>
  );
}

export default App;
