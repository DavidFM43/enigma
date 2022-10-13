import { TestBed } from "@angular/core/testing";

import { NormalizerService } from "./normalizer.service";

describe("NormalizerService", () => {
  let service: NormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalizerService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
