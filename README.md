# Simple Market Making bor for Dexalot

Market Making bot on dexalot with a simple strategy.

On startup :
1) Fetch all contract addresses and ABIs from Dexalot.
2) Fetch current orders and cancels them.
3) Open Listeners on the TraidePairs contracts.

On contract events :
-   Update current price from every order executed.
-   Update internal position from order status changes.
-   Re-create positions on every internal position executed.
There also is a time loop that refreshes positions following the bot configuration.

## Market Making strategy

Take the current price and create 1 buy and 1 sell positions, +/- the configured spread. Only create positions that doesn't already exists, cancels those that are not needed anymore.

## Testing

A trader bot can be launched to take positions from the market maker. It takes random positions from the closest buy and sell orders.

## Limits

If the Dexalot API is down I can't cancels orders after a crash.  
Only works with 18 decimals ERC20s against AVAX (decimals poorly handled).
Would not work very well if we want to place several buy or sell orders in our strategy.

## Video demonstration
1)  Deposit some AVAX and TEAM1 token.
2)  Launch bot, wait for the order creation, simulates crash.
3)  Launch bot again. It cancels previous transactions and create new ones.
4)  Stop bot with Ctrl + C. It cancels all ongoing orders.
5)  Starts it again + starts a trader bot that randomly fill orders from the market making bot.
6)  Opens the orderbook (refreshes every 2 sec).