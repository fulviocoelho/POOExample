/// <reference types="mocha" />

import { expect } from 'chai';
import Actions from '../../src/business/Actions';
import UsefullFactory from '../../src/factory/UsefullFactory';
import { handler } from '../../src/handler/Handler';
import IEvent from '../../src/interfaces/IEvent';
import Logs from '../../src/usefull/Logs';

describe('Handler Testes', () => {
    it('SUCCESS: Execute handler', () => {
        class FakeAction {
            constructor() {
                
            }
        }
        try{
            handler(
                {} as IEvent, 
                {
                    createLogs: () => {
                        return {
                            info: () => {},
                            error: () => {}
                        } as unknown as Logs
                    }
                } as UsefullFactory,
                new FakeAction() as unknown as Actions
            )
        } catch (err) {
            expect(err).to.be.eq(undefined);
        }
    });
    it('ERROR: Execute handler', () => {
        class FakeAction {
            constructor() {
                throw new Error()
            }
        }
        try{
            handler(
                {} as IEvent, 
                {
                    createLogs: () => {
                        return {
                            info: () => {},
                            error: () => {}
                        } as unknown as Logs
                    }
                } as UsefullFactory,
                new FakeAction() as unknown as Actions
            )
        } catch (err) {
            expect(err).not.to.be.eq(undefined);
        }
    });
});