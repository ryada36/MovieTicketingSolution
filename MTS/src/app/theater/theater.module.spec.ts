import { TheaterModule } from './theater.module';

describe('TheaterModule', () => {
  let theaterModule: TheaterModule;

  beforeEach(() => {
    theaterModule = new TheaterModule();
  });

  it('should create an instance', () => {
    expect(theaterModule).toBeTruthy();
  });
});
