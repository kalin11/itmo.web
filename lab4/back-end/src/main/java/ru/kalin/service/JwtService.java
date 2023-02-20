package ru.kalin.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
public class JwtService {
    @Value("${jwt.secret.word}")
    private String secretWord;
    @Value("${jwt.lifetime.value}")
    private long lifetime;

    public String createWebToken(String userId){
        SecretKey key = Keys.hmacShaKeyFor(secretWord.getBytes());
        Instant now = Instant.now();
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.plus(lifetime, ChronoUnit.HOURS)))
                .signWith(key)
                .compact();

    }

    public String getPersonIdFromToken(String token) throws JwtException{
        SecretKey key = Keys.hmacShaKeyFor(secretWord.getBytes());
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

}
