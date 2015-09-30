import React from 'react';

export default function(Component, ...stores) {

    function getInitialState() {
        return stores.reduce((state, store) => {
            return Object.assign(state, store.getState());
        }, {});
    }

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = getInitialState();
            this.onStoreChange = this.onStoreChange.bind(this);
        }

        componentDidMount() {
            stores.forEach((store) => {
                store.listen(this.onStoreChange);
            });
        }

        componentWillUnmount() {
            stores.forEach((store) => {
                store.unlisten(this.onStoreChange);
            });
        }

        render() {
            return (
                <Component {...this.state} />
            );
        }

        onStoreChange(state) {
            this.setState(state);
        }
    }
}
