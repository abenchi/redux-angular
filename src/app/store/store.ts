import {createStore, applyMiddleware, compose, GenericStoreEnhancer} from 'redux';
import {reducer} from './reducer';
import {IAppState} from './IAppState';

declare var window:any;

var devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension) ?
    window.devToolsExtension() :
    (f) => f;

export const store = createStore<IAppState>(
    reducer,
    compose(devToolsExtension) as GenericStoreEnhancer
);