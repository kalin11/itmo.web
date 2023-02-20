package ru.kalin.pageControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
    @RequestMapping(value = { "/", "/main"})
    public String reroute() {
        return "/index.html";
    }

}
