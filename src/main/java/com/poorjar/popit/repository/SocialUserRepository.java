package com.poorjar.popit.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Set;

/**
 * Spring Data MongoDB repository for the Social User Connection entity.
 */
public interface SocialUserRepository extends MongoRepository<SocialUser, String> {

    List<SocialUser> findAllByProviderIdAndProviderUserId(String providerId, String providerUserId);

    List<SocialUser> findAllByProviderIdAndProviderUserIdIn(String providerId, Set<String> providerUserIds);

    List<SocialUser> findAllByUserIdOrderByProviderIdAscRankAsc(String userId);

    List<SocialUser> findAllByUserIdAndProviderIdOrderByRankAsc(String userId, String providerId);

    List<SocialUser> findAllByUserIdAndProviderIdAndProviderUserIdIn(String userId, String providerId, List<String> provideUserId);

    SocialUser findOneByUserIdAndProviderIdAndProviderUserId(String userId, String providerId, String providerUserId);

    void deleteByUserIdAndProviderId(String userId, String providerId);

    void deleteByUserIdAndProviderIdAndProviderUserId(String userId, String providerId, String providerUserId);
}
