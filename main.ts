namespace SpriteKind {
    export const cloud = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.cloud, function (sprite) {
    game.over(true)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let raindrop: Sprite = null
let cloud: Sprite = null
cloud = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f . . . . 
    . . f 1 8 8 8 8 1 8 8 f f f . . 
    . . f 8 8 1 8 1 8 8 8 8 f f f . 
    . f f 8 8 8 8 8 8 8 8 1 8 8 f . 
    . f 1 8 1 8 8 8 1 8 8 8 8 1 f . 
    . f 8 8 8 8 1 8 8 8 1 8 8 f f . 
    . f f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, cloud, 10, 0)
cloud.setKind(SpriteKind.cloud)
cloud.y += 60
game.onUpdate(function () {
    raindrop = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cloud, 0, 30)
    raindrop.x += 3
    raindrop.y += randint(1, 13)
})
