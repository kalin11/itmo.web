package ru.kalin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.kalin.request.HitRequest;
import ru.kalin.response.ClearHitsResponse;
import ru.kalin.response.CreatingHitResponse;
import ru.kalin.response.GetHitsResponse;
import ru.kalin.service.HitService;


@RestController
@RequestMapping("v1/hits")
public class HitController {
    private static final int defaultPageSize = 7;
    private final HitService service;

    @Autowired
    public HitController(HitService service) {
        this.service = service;
    }

    @PostMapping("/newHit")
    public CreatingHitResponse add(@Validated @RequestBody HitRequest request, @RequestHeader(value = "Authorization") String token){
        return service.add(request, token.substring(7));
    }

    @DeleteMapping("/delete")
    public ClearHitsResponse delete(@RequestHeader(value = "Authorization") String token){
        return service.clearing(token.substring(7));
    }

    @GetMapping("/allHits/{offset}")
    public GetHitsResponse getHits(@RequestHeader(value = "Authorization") String token,
                                   @PathVariable int offset){
        if (offset < 0) offset = 0;
        return service.getHits(token.substring(7), offset, defaultPageSize);
    }

    @GetMapping("/test")
    public String test(Model model){
        model.addAttribute("name", "artem");
        return "thymeleaf.html";
    }

}
