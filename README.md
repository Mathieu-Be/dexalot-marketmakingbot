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